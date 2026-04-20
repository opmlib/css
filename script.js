document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("input");

  if (toggle) {
    toggle.addEventListener("change", () => {
      document.body.classList.toggle("dark", toggle.checked);
    });
  }
});
