document.addEventListener("DOMContentLoaded", function() {
    const link = document.querySelector(".drop > a");
    const dropDown = document.querySelector(".dropDown");

    link.addEventListener("click", function(event) {
        event.preventDefault();
        dropDown.style.display = dropDown.style.display === "block" ? "none" : "block";
    });
});
