// 모바일 메뉴
const menu = document.querySelector('.main-menu');
const menuBtn = document.querySelector('.menu-btn');
const wrap = document.getElementById('wrap');

menuBtn.addEventListener('click', ()=>{    
    menu.classList.toggle('click');
    menuBtn.classList.toggle('on');
    wrap.classList.toggle('scroll-none');
});
// wow.js
var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();