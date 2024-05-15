document.addEventListener("DOMContentLoaded", function () {
  loadContent();
});

function loadContent() {
  $("#nav-placeholder").load("components/navbar.html");
  $("#hero-placeholder").load("components/hero.html");
  $("#social-placeholder").load("components/social.html");
  $("#technical-placeholder").load("components/technical.html");
  $("#projects-placeholder").load("components/projects.html");
  $("#aboutMe-placeholder").load("components/aboutMe.html");
}
