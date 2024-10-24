chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension Installed');
})

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "getHTML") {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            if (tabs.length > 0) {
                const activeTab = tabs[0];
                chrome.scripting.executeScript({
                    target: { tabId: activeTab.id },
                    func: () => document.documentElement.outerHTML,
                }, (results) => {
                    if (results && results[0]) {
                        sendResponse({ html: results[0].result });
                    }
                });
            } else {
                sendResponse({ html: "No active tab found. Could be due to clicking button while the window is inactive." });
            }
        });
        return true;
    }
});