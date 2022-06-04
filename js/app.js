"use strict";

// 1.Subscribe Button (prevent default for demo)
// Avoid form submit on click
// let btnSubmit = document.querySelector(".btn--submit");
// btnSubmit.addEventListener("click", (e) => {
//   e.preventDefault();
// });

// // 2. Toggle Menu
// // Open and close buttons
// let navOpen = document.querySelector(".nav-open");
// let nav = document.querySelector(".nav");
// let header = document.querySelector(".header");
// navOpen.addEventListener("click", () => {
//   header.style.zIndex = 1;
//   nav.style.zIndex = 9999;
//   nav.style.transform = "translateY(0)";
// });

// 2. Slider (Splide.js)
document.addEventListener("DOMContentLoaded", function () {
  // https://splidejs.com/guides/options/
  let splide = new Splide(".splide", {
    type: "loop",
    perPage: 1,
    rewind: false,
    autoplay: true,
    pagination: false,
    interval: 5000,
    wheel: false,
    releaseWheel: true,
    height: "60vh",
    cover: false,
    padding: { right: "25rem" },
    updateOnMove: true,
    breakpoints: {
      640: {
        padding: { right: "10rem" },
      },
    },
  });

  // Animate on Slide
  splide.on("active", (Slide) => {
    // let element = Slide.slide.querySelector("#anim");
    // console.log(element);
    // element.classList.add("animate");
    // document.querySelector(".c").style.color = "red";
    // let prevSlide = document.querySelector(".is-prev");
    // prevSlide.style.opacity = "0.5";
  });

  splide.on("inactive", (Slide) => {
    // let element = Slide.slide.querySelector("#anim");
    // console.log(element);
    // element.classList.remove("animate");
    // document.querySelector(".a").style.color = "red";
  });

  // Change titles on each cycle (like thumbnail pagination)
  var slideTitle = document.getElementsByClassName("events-item");
  var current;

  for (var i = 0; i < slideTitle.length; i++) {
    goSlide(slideTitle[i], i);
  }

  function goSlide(li, index) {
    li.addEventListener("click", function () {
      splide.go(index);
    });
  }

  splide.on("mounted move", function () {
    var li = slideTitle[splide.index];

    if (li) {
      if (current) {
        current.classList.remove("is-active");
      }

      li.classList.add("is-active");
      current = li;
    }
  });

  splide.mount();
});
