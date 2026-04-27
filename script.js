document.addEventListener("DOMContentLoaded", () => {

  fetch("https://opmlib.github.io/opm/themetoggle.html")
    .then(res => res.text())
    .then(html => {

      const container = document.getElementById("toggle-container");
      if (!container) return;

      container.innerHTML = html;

      const toggle = document.getElementById("input");
      if (toggle) {
        toggle.addEventListener("change", () => {
          document.body.classList.toggle("dark", toggle.checked);
        });
      }

    });

});
