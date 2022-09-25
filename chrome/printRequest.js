//printRequest.js
//Wait for Jira api then request print
jiraApi();
function xhrJiraListener () {
    const ticketData = jiraParser(JSON.parse(this.responseText));
    printRequest(scrapeTicketKey(), ticketData.name, ticketData.reporter, ticketData.birthday, ticketData.copies);
}

function printRequest(ticketKey, ticketName, ticketReporter, ticketBirthday, ticketCopies) {
    //make request url
    const requestUrl = `http://localhost:3000/printTicket/${ticketKey}.${ticketName}.${ticketReporter}.${ticketBirthday}.${ticketCopies}`;
    //alert(requestUrl);
    
    //create XMLHttpRequest object
    const xhrPrint = new XMLHttpRequest();
    //open a get request with the remote server URL
    xhrPrint.open("GET", requestUrl);
    //send the Http request
    xhrPrint.send();
}

function scrapeTicketKey() {
    //get url path elements
    const pathArray = window.location.pathname.split('/');
    //return last element
    return pathArray[pathArray.length - 1];
}

function jiraApi() {  
    const xhrJira = new XMLHttpRequest();
    xhrJira.addEventListener("load", xhrJiraListener);
    xhrJira.open("GET", `https://jira.cad.rit.edu/rest/agile/1.0/issue/${scrapeTicketKey()}`);
    xhrJira.send();
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

/*function scrapeTicketReporter() {
    //return reporter name
    return normalizeScrapes(document.querySelector(`[id^="issue_summary_reporter"]`).textContent);
}*/