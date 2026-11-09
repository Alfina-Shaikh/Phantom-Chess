// PHANTOM CHESS — Welcome Screen

const skipCheckbox = document.getElementById("skipWelcome");

// Load the saved preference
const savedPreference = localStorage.getItem("skipWelcome");

if (savedPreference === "true") {
    skipCheckbox.checked = true;
}

// Save whenever the checkbox changes
skipCheckbox.addEventListener("change", function () {
    localStorage.setItem("skipWelcome", skipCheckbox.checked);
});
