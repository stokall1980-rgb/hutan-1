// Smooth scroll
document.querySelectorAll("nav a[href^='#']").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 20,
                behavior: "smooth"
            });
        }
    });
});

// Fade scroll animations
const fades = document.querySelectorAll(".fade");
function showFade() {
    fades.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
}
window.addEventListener("scroll", showFade);
window.addEventListener("load", showFade);

// DARK MODE
const darkButton = document.querySelector(".toggle-dark");

function applyDarkMode() {
    if (localStorage.getItem("darkmode") === "true") {
        document.body.classList.add("dark");
        darkButton.textContent = "☀️";
    } else {
        document.body.classList.remove("dark");
        darkButton.textContent = "🌙";
    }
}

darkButton.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");
    localStorage.setItem("darkmode", isDark);
    applyDarkMode();
});

applyDarkMode();
