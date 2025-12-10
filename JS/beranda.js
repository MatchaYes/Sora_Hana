document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
    const preloader = document.getElementById("preloader");

    if (!header) console.error("Elemen .header tidak ditemukan!");

    function handleHeaderScroll() {
        if (!header) return;
        if (window.scrollY > 50) header.classList.add("scrolled");
        else header.classList.remove("scrolled");
    }

    window.addEventListener("scroll", handleHeaderScroll);
    handleHeaderScroll();

    window.addEventListener("load", function () {
        if (preloader) {
            preloader.style.transition = "opacity 0.5s ease";
            preloader.style.opacity = "0";
            setTimeout(() => {
                preloader.style.display = "none";
            }, 500);
        }
    });
});

