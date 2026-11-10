// PHANTOM CHESS — Welcome Screen

const skipCheckbox = document.getElementById("skipWelcome");

if (skipCheckbox) {
    const savedPreference = localStorage.getItem("skipWelcome");

    if (
        savedPreference === "true" &&
        sessionStorage.getItem("showWelcome") !== "true"
    ) {
        window.location.replace("home.html");
    }

    sessionStorage.removeItem("showWelcome");

    skipCheckbox.checked = savedPreference === "true";

    skipCheckbox.addEventListener("change", function () {
        localStorage.setItem("skipWelcome", skipCheckbox.checked);
    });
}
