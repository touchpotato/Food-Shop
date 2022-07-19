gsap.registerPlugin(ScrollTrigger);

let masks = document.querySelectorAll(".mask");

$(document).ready(function(){
  $(this).scrollTop(0);
});

$(".toggle-button").click(function() {
  $(".nav-links").toggleClass("active");
})

masks.forEach(mask => {
  let image = mask.querySelector("img");
  
  let tl = gsap.timeline({
    scrollTrigger: {trigger: mask, toggleActions: "restart none none reset"}
  });

  tl.from(mask, 1.5, {xPercent: -100, ease: Power2.out});

  tl.from(image, 1.5, {xPercent: 100, scale: 1.3, delay: -1.5, ease: Power2.out});
})

let tl = gsap.timeline({
  defaults: {ease: "power4.inOut", duration: 2}
});

// let contactTransition = gsap.timeline({paused: true});
  

tl
  .to("nav", {opacity: 1, y: 0, duration: 0.5})
  // .from(".section-landing", {width: 100 + "%", height: 100 + "vh", "border-radius": 0, margin: 0})
  .to(".welcome", {opacity: 1, y: 0, duration: 1})

// contactTransition
//   .to(".section-contact", {x: 0 + "%", duration: 1})
// $(".contact").click(function() {
//   contactTransition.play(0);
// });

// var cursor = document.querySelector('.cursor');

// document.addEventListener('mousemove', function(e){
//   var x = e.clientX;
//   var y = e.clientY;
//   cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
// });

// document.addEventListener('mousemove', function(e){
//   var x = e.clientX;
//   var y = e.clientY;
// });

// document.addEventListener('mousedown', function(){
//   cursor.classList.add('click');
// });

// document.addEventListener('mouseup', function(){
//   cursor.classList.remove('click')
// });