
// animation onScoll
window.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  header.classList.toggle("header-active", window.scrollY > 10);
})

$(document).ready(function () {
  $(".icon-menu-mobile").click(function () {
      $(".menu-mobile").addClass('active_mobile');
      $(".overlay").addClass('overlay-block');
  });
  $(".menu-mobile__close").click(function () {
      $(".menu-mobile").removeClass("active_mobile");
      $(".overlay").removeClass('overlay-block');
  });
  $(".overlay").click(function () {
      $(".menu-mobile").removeClass("active_mobile");
      $(".overlay").removeClass('overlay-block');
  });


});