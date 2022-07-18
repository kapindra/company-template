import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

$(".desktop-nav").click(function () {
  $(".desktop-nav").removeClass("d-lg-block");
  $(".scholarship-link").removeClass("link-active");
})

$(".desktop-nav__contents").click(function (e) {
  e.stopPropagation();
})
$(".desktop-modal-header").click(function (e) {
  e.stopPropagation();
})
ScrollTrigger.create({
  start: 'top -40',
  end: 99999,
  duration: 2,
  toggleClass: { className: 'custom-navbar--fixed', targets: '.normal-nav-header' }
});

$(".scholarship-link").click(function () {
  $(".desktop-nav").toggleClass("d-lg-block");
  $(".scholarship-link").toggleClass("link-active");
})