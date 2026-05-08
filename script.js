document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("main-header");

    // Add 'scrolled' class to header when user scrolls down
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});