const skipCheckbox = document.getElementById("skipWelcome");

skipCheckbox.addEventListener("change", function () {
    alert("Checkbox detected: " + skipCheckbox.checked);

    localStorage.setItem("skipWelcome", skipCheckbox.checked);
});

window.addEventListener("load", function () {
    const saved = localStorage.getItem("skipWelcome");

    alert("Saved preference: " + saved);

    skipCheckbox.checked = saved === "true";
});
