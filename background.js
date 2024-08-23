chrome.runtime.onInstalled.addListener(() => {
  // This will run only once when the extension is installed
  chrome.storage.local.set({ lockedSites: [] });
});
