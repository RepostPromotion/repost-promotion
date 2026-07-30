document.documentElement.classList.add("js");

const year = document.querySelector("[data-current-year]");
if (year) {
  year.textContent = String(new Date().getFullYear());
}

const backToTop = document.querySelector("[data-back-to-top]");
if (backToTop) {
  const toggleBackToTop = () => {
    backToTop.classList.toggle("is-visible", window.scrollY > 480);
  };

  window.addEventListener("scroll", toggleBackToTop, { passive: true });
  toggleBackToTop();

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

document.querySelectorAll("img[data-fallback]").forEach((image) => {
  image.addEventListener("error", () => {
    image.hidden = true;
    const fallback = image.parentElement?.querySelector("[data-image-fallback]");
    if (fallback) {
      fallback.removeAttribute("hidden");
    }
  });
});
