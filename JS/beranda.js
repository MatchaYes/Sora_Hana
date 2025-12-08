document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");

    if (!header) {
        console.error("Elemen .header tidak ditemukan!");
        return;
    }

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});
