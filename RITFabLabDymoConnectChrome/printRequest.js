//printRequest.js
printRequest(scrapeTicketKey());

function printRequest(ticketKey) {
    //make request url
    const requestUrl = `https://129.21.67.34:3126/printTicket/${ticketKey}`;
    
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