import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  start: 'top -40',
  end: 99999,
  duration: 2,
  toggleClass: { className: 'custom-navbar--fixed', targets: '.custom-navbar' }
});