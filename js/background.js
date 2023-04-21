chrome.action.onClicked.addListener(async (tab) => {
  chrome.tabs.create({url: 'html/blank.html' });
});