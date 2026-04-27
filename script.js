document.addEventListener("DOMContentLoaded", () => {

  fetch("https://yourdomain.com/toggle.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("toggle-container").innerHTML = html;

      const toggle = document.getElementById("input");
      if (toggle) {
        toggle.addEventListener("change", () => {
          document.body.classList.toggle("dark", toggle.checked);
        });
      }
    });

});
