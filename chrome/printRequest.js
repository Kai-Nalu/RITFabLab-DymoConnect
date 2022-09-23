//printRequest.js
//Wait for Jira api then request print
jiraApi();
function xhrJiraListener () {
    jiraParser(this.responseText);
    printRequest(key, name, reporter, birthday, copies);
}

function printRequest(ticketKey, ticketName, ticketReporter, ticketBirthday, ticketCopies) {
    //make request url
    const requestUrl = `http://localhost:3000/printTicket/${ticketKey()}.${ticketName()}.${ticketReporter()}.${ticketBirthday()}.${ticketCopies()}`;
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
    let name = ticketJson['fields']['summary'];
    let reporter = normalizeReporter(ticketJson['fields']['creator']['displayName']);
    let birthday = ticketJson['fields']['created']; //NEEDS TO BE FORMATTED
    let copies = ticketJson['fields']['customfield_12004']; //NEEDS TO BE FORMATTED
    
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