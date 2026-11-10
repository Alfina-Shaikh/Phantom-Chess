// PHANTOM CHESS — Welcome Screen

const skipCheckbox = document.getElementById("skipWelcome");

// Check whether the visitor previously chose to skip
const savedPreference = localStorage.getItem("skipWelcome");

// If skipping is enabled, open the Home Screen
if (
    savedPreference === "true" &&
    sessionStorage.getItem("showWelcome") !== "true"
) {
    window.location.href = "home.html";
}

sessionStorage.removeItem("showWelcome");
// Save the visitor's choice
skipCheckbox.addEventListener("change", function () {
    localStorage.setItem("skipWelcome", skipCheckbox.checked);
});
