






/////////GSAP///////////

const burgerBtn = document.querySelector(".menu-btn");


function navToggle(e) {
  if (!e.target.classList.contains("active")) {
      e.target.classList.add("active");
      gsap.to(".menu-btn", 1, { color: "black" });
      gsap.to(".nav-bar", 1, { clipPath: "circle(2500px at 100% -10%)"});
      body.classList.add("hide");
  }
  else {
      e.target.classList.remove("active");
      gsap.to(".menu-btn", 1, { color: "white" });
      gsap.to(".nav-bar", 0.5, { clipPath: "circle(50px at 100% -10%)"}, "-=0.2");
      body.classList.remove("hide");
  }

}

burgerBtn.addEventListener("click", navToggle);



function containerAnimation() {
const tl = gsap.timeline({ defaults: { ease: "power2.out" }});

tl.from(".hero-container", {
  scale: 0.6,
  duration: 2,
  opacity: 0,
  delay: 0.2
})
.to(".content", {
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  y: 0,
  duration: 1
}, "-=0.3")

} 







////carousel - slick slider////
function cara() { 
  $('.sliders').slick({
    infinite: true,
    dots: true,
    speed: 300,
    prevArrow: '<i class="fa-solid fa-circle-left left_arrow">',
    nextArrow: '<i class="fa-solid fa-circle-right right_arrow">',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
}


  ///////////////typwriter/////////
function typewriter() {
const texts = ['developing', 'influencing', 'learning'];
let count = 0;
let index = 0;
let currentText = '';
let letter =  '';

(function type() {
  
 if(count === texts.length) {
   count = 0;
 }
 currentText = texts[count];
 letter = currentText.slice(0, ++index);

document.querySelector(".tw").textContent = letter;
if(letter.length === currentText.length) {
  count++;
  index = 0;
}
setTimeout(type, 200);

}());
}


  //////////barba//////
 const logo = document.querySelector("#logo");
 const home = document.querySelector("#ho");
  barba.init({
    views: [
      {
        namespace: "home",
        beforeEnter(){
          containerAnimation();
          typewriter();
          cara();
          logo.href = "./index.html",
          home.href = "./index.html"
        }
      },
      {
        namespace: "teams",
        beforeEnter(){
          logo.href = "../index.html",
          home.href = "../index.html"
        }
      }
    ],
    transitions: [
      {
        leave({ current, next}) {
          let done = this.async();
          ////Animation
          const tl = gsap.timeline({ defaults: { ease: "power2.out" }});

          tl.fromTo(current.container, 1, { opacity: 1 }, { opacity: 0 });
          tl.fromTo(
            ".swipe",
            0.75,
            { x: "-100%" },
            { x: "0%", onComplete: done },
            "-=0.2"
          );
        },
        enter({ current, next}) {
          let done = this.async();
          ////Animation
          const tl = gsap.timeline({ defaults: { ease: "power2.out" }});
          tl.fromTo(
            ".swipe",
            1,
            { x: "0%" },
      
            { x: "100%", stagger: 0.23, onComplete: done }
          );
          tl.fromTo(next.container, 1, { opacity: 0 }, { opacity: 1 });
        }
      }
    ]
    
    
    })