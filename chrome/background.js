//background.js
function errorAlert() {
    alert('Must be in a Jira issue!');
}

chrome.action.onClicked.addListener((tab) => {
    if (tab.url.includes("jira.cad.rit.edu") && tab.url.includes("PR3D-")) {
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