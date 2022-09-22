// background.js
function errorAlert() {
    alert('Must be in Jira!');
}

chrome.action.onClicked.addListener((tab) => {
    if (tab.url.includes("jira.cad.rit.edu")) {
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            files: ['printRequest.js']
        });
    } else {
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            function: errorAlert
        });
    }
});