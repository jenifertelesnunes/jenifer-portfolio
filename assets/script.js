document.addEventListener("DOMContentLoaded", () => {
  // Automatically update the year in every footer.
  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  // Create one accessible back-to-top button on every page.
  const button = document.createElement("button");
  button.type = "button";
  button.className = "back-to-top";
  button.setAttribute("aria-label", "Back to the top of the page");
  button.setAttribute("title", "Back to top");
  button.innerHTML = "↑";
  document.body.appendChild(button);

  const updateButtonVisibility = () => {
    button.classList.toggle("is-visible", window.scrollY > 450);
  };

  window.addEventListener("scroll", updateButtonVisibility, { passive: true });
  updateButtonVisibility();

  button.addEventListener("click", () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth"
    });
  });
});
