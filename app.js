jQuery(document).ready(function($){

  $(document).scrollTop(0);
  gsap.registerPlugin(ScrollTrigger);
  $('.section2').css('display', 'none');

  /* SCROLL */

  window.onscroll = function() {
    myFunction()
  };

  function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.height = scrolled + "%";
  }


  /* Intro heading animation*/
  var introTl = gsap.timeline();
  var text = new SplitText(".section1 .heading1", {type: "chars"/*, ease:Linear.easeNone, duration: -2*/});
  var lines = text.chars;
  var dots = $('.section1 .heading1 div:nth-last-child(1), .section1 .heading1 div:nth-last-child(2), .section1 .heading1 div:nth-last-child(3)');
  var blackDiv = $('.section1 .black-div');

      introTl.fromTo(lines, {opacity: 0, y: 10}, {opacity: 1, y: 0, stagger: 0.05, ease:"back(4)"})
              .to(dots, 0.2, {y: -7, stagger: 0.1, delay: 0.2})
              .to(dots, 0.2, {y: 0, stagger: 0.1}, "-=0.2")
              .to(dots, 0.2, {y: -7, stagger: 0.1, delay: 0.5})
              .to(dots, 0.2, {y: 0, stagger: 0.1}, "-=0.2")
              .to(lines, {scale: 0, delay: 0.8})
              .to(blackDiv, {width: '100vw', duration: 2.5, ease: "bounce.in"}, "-=3")
              .to($('.section1'), {display: 'none'})
              .to($('body'), {overflow: 'visible', onComplete: myCallback});



  $('.section2 .scroll-down svg').click(function(){
    location.href='/#projects';
  });

function myCallback(){

  if (screen.width > 1024) {
    $('.section2').css('opacity', '0');
    $('.section2').css('display', 'flex');
  }else{
    $('.section2').css('opacity', '0');
    $('.section2').css('display', 'block');
  }

  $('.section3').css('display', 'block');
  $('.section4').css('display', 'flex');
  $('.section5').css('display', 'block');
  $('.section6').css('display', 'flex');

  var sec2Tl = gsap.timeline();
  var text2 = new SplitText(".section2 .heading1", {type: "words"/*, ease:Linear.easeNone, duration: -2*/});
  var lines = text2.words;


       sec2Tl.fromTo($('.section2'), {opacity: 0}, {opacity: 1})
             .fromTo(lines, {opacity: 0, y: 10}, {opacity: 1, y: 0, stagger: 0.05})
             .fromTo($('.heart-img'), 0.3, {scale:0}, {scale: 1, ease: Back.easeOut.config(2.7)}, "-=0.65")
             .fromTo($('.section2 .me'), 0.5, {opacity: 0}, {opacity: 1}, "-=1")
             .fromTo($('.section2 .scroll-down svg'), 0.5, {opacity: 0}, {opacity: 0.4}, "-=0.5");


      gsap.timeline({scrollTrigger:{
        trigger:".section4",
        start:"+=100px center"
      }})
      .fromTo(".section4 .container a", 0.5, {opacity: 0, y: 10, scale: .90}, {opacity: 1, y: 0, scale: 1, stagger: 0.1});


      gsap.timeline({scrollTrigger:{
        trigger:".section5",
        start:"center-=100px center",
        pin: ".section5",
        duration: 0.3,
        end: "+=150%",
        scrub: true
      }})
      .fromTo(".section5 div", {scale: 0, rotate: 0, opacity: 0}, {scale: 1, rotate: 360, opacity: 1})
      .to(".section5 div", 0.3, {scale: 1});


 var text2 = new SplitText(".section6 h2", {type: "chars"});
 var lines2 = text2.chars;

      gsap.timeline({scrollTrigger:{
        trigger:".section6",
        start:"center-=10px center",
        end: "center-=10px center",
        scrub: 1.5
      }})
      .fromTo('.section6 a', {pointerEvents: 'none'},{pointerEvents: 'all'})
      .fromTo('body', 10, {backgroundColor: '#000'},{backgroundColor: '#fff'})
      .fromTo(lines2, 0.5, {opacity: 0, y: 10}, {opacity: 1, y: 0, stagger: 0.05, ease:"back(4)"})
      .fromTo(".section6 .social-container a", 0.3, {opacity: 0, y: 10}, {opacity: 1, y: 0, stagger: 0.1, }), "-=1";
}

/* Projects hovered */

$('.section4 .project1').mouseenter(function(){
  $('.image-container .anassa').css('opacity', '0.3');
});

$('.section4 .project1').mouseleave(function(){
  removeImg();
});

$('.section4 .project2').mouseenter(function(){
  $('.image-container .meltemi').css('opacity', '0.3');
});

$('.section4 .project2').mouseleave(function(){
  removeImg();
});

$('.section4 .project3').mouseenter(function(){
  $('.image-container .ilvief').css('opacity', '0.3');
});

$('.section4 .project3').mouseleave(function(){
  removeImg();
});

$('.section4 .project4').mouseenter(function(){
  $('.image-container .mezen').css('opacity', '0.3');
});

$('.section4 .project4').mouseleave(function(){
  removeImg();
});

$('.section4 .project5').mouseenter(function(){
  $('.image-container .grooove').css('opacity', '0.3');
});

$('.section4 .project5').mouseleave(function(){
  removeImg();
});

$('.section4 .project6').mouseenter(function(){
  $('.image-container .siouras').css('opacity', '0.3');
});

$('.section4 .project6').mouseleave(function(){
  removeImg();
});

$('.section4 .project7').mouseenter(function(){
  $('.image-container .droikonomou').css('opacity', '0.3');
});

$('.section4 .project7').mouseleave(function(){
  removeImg();
});

function removeImg(){
  $('.image-container img').css('opacity', '0');
}


});
