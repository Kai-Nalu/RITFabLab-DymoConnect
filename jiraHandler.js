exports.jiraHandler = function (ticketKey) {
    return new Promise(resolve => {
        const https = require('https');
        
        callback = function(response) {
            let jiraData = '';
            
            response.on('data', function (chunk) {
                jiraData += chunk;
            });
            
            response.on('end', function () {
                let ticketData = jiraParser(JSON.parse(jiraData));
                let ticketInfo = {key:ticketKey, name:ticketData.name, reporter:ticketData.reporter, birthday:ticketData.birthday, copies:ticketData.copies};
                resolve(ticketInfo);
            });
        };
        
        function jiraApi() {
            const options = {
                host: 'jira.cad.rit.edu',
                path: `/rest/agile/1.0/issue/${ticketKey}`,
                method: 'GET',
                headers: {
                    Authorization: 'Basic a25uY2FkZmFiOkZUYWluYTIwMjNiKg=='
                }
            };
            https.request(options, callback).end();
        }
        
        function jiraParser(ticketJson) {
            const name = ticketJson['fields']['summary'];
            const reporter = normalizeReporter(ticketJson['fields']['creator']['displayName']);
            const birthdayRaw = ticketJson['fields']['created'];
            const birthdayFiltered = birthdayRaw.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/i);
            const birthday = birthdayFiltered[0];
            const copiesRaw = ticketJson['fields']['customfield_12004'];
            const copiesFiltered = Math.trunc(copiesRaw);
            const copies = copiesFiltered.toString();
            
            return {name, reporter, birthday, copies};
        }
        
        function normalizeReporter(s) {
            s = s.match(/\S+/g);
            s = s ? s.join(' ') : '';
            return s.replace(/\s\([^()]*\)/g, '');
        }
        
        jiraApi();
    });
};