$(".navbar-toggler").click(function () {
  $(".mobile-nav").toggleClass("d-none");
  $("#white-logo").toggleClass("d-none");
  $("#blue-logo").toggleClass("d-none");
  $("#hamburger").toggleClass("d-none");
  $("#close").toggleClass("d-none");
});

$(".scholarship-link").click(function () {
  $(".custom-navbar").toggleClass("custom-navbar--fixed");
  $(".desktop-nav").toggleClass("d-lg-block");
})