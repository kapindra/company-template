import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

$(".desktop-nav").click(function () {
  $(".desktop-nav").removeClass("d-lg-block");
  // $(".custom-navbar").removeClass("custom-navbar--fixed");
})

$(".desktop-nav__contents").click(function (e) {
  e.stopPropagation();
})
$(".desktop-modal-header").click(function (e) {
  e.stopPropagation();
})

// var isClicked = $('.scholarship-link').data('clicked');
// if (isClicked == 'yes') {
// do something
ScrollTrigger.create({
  start: 'top -40',
  end: 99999,
  duration: 2,
  toggleClass: { className: 'custom-navbar--fixed', targets: '.normal-nav-header' }
});
// }

$(".scholarship-link").click(function () {
  // $(".custom-navbar").toggleClass("custom-navbar--fixed");
  $(".desktop-nav").toggleClass("d-lg-block");
  // $(".desktop-nav").toggleClass("custom-navbar--fixed");
})