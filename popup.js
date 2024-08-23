document.getElementById("setPasswordBtn").addEventListener("click", () => {
  const password = prompt("Set a new password:");
  if (password) {
    chrome.storage.local.set({ password: password });
    alert("Password set successfully!");
  }
});

document.getElementById("lockSiteBtn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const url = new URL(tabs[0].url);
    const hostname = url.hostname;

    chrome.storage.local.get(["lockedSites"], (result) => {
      let lockedSites = result.lockedSites || [];
      if (!lockedSites.includes(hostname)) {
        lockedSites.push(hostname);
        chrome.storage.local.set({ lockedSites: lockedSites }, () => {
          alert("Site locked successfully!");
        });
      } else {
        alert("This site is already locked.");
      }
    });
  });
});
