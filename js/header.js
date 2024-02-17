document.addEventListener("DOMContentLoaded", function () {
  var submenus = document.querySelectorAll("nav ul ul");

  submenus.forEach(function (submenu) {
    submenu.addEventListener("mouseleave", function () {
      this.style.display = "none";
    });
  });
});
