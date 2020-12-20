/* background script*/

chrome.runtime.onInstalled.addListener(function(){
    chrome.storage.sync.set({color: '#3aa757'}, function(){
        console.log('The color is green.');
    });
    chrome.declaritiveContent.onPageChanged.removeRules(undefined, function(){
        chrome.declaritiveContent.onPageChanged.addRules([{
            conditions: [new chrome.declaritiveContent.PageStateMatcher({
                pageUrl: {hostEquals: 'developer.chrome.com'}, 
            })
        ],
            actions: [new chrome.declaritiveContent.ShowPageAction()]
        }]);
    });
});