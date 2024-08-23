chrome.storage.local.get(["lockedSites", "password"], (result) => {
  const lockedSites = result.lockedSites || [];
  const password = result.password || null;

  if (lockedSites.includes(window.location.hostname)) {
    if (!document.getElementById("lockScreen")) {
      const lockScreen = document.createElement("div");
      lockScreen.id = "lockScreen";
      lockScreen.style.position = "fixed";
      lockScreen.style.top = "0";
      lockScreen.style.left = "0";
      lockScreen.style.width = "100%";
      lockScreen.style.height = "100%";
      lockScreen.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      lockScreen.style.zIndex = "999999";
      lockScreen.style.display = "flex";
      lockScreen.style.justifyContent = "center";
      lockScreen.style.alignItems = "center";

      const unlockForm = document.createElement("div");
      unlockForm.innerHTML = `
                <div style="background: white; padding: 20px; border-radius: 10px; text-align: center;">
                    <h2>Enter Password</h2>
                    <input type="password" id="unlockPassword" placeholder="Enter Password" style="padding: 10px; margin: 10px 0; border:1px solid red;">
                    <button id="unlockBtn" style="padding: 10px; border:1px solid black; color:black;">Unlock</button>
                </div>
            `;
      lockScreen.appendChild(unlockForm);
      document.body.appendChild(lockScreen);

      document.getElementById("unlockBtn").addEventListener("click", () => {
        const enteredPassword = document.getElementById("unlockPassword").value;
        if (enteredPassword === password) {
          lockScreen.remove();
        } else {
          alert("Incorrect Password");
        }
      });
    }
  }
});
