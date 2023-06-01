$(".gallery__slider").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  centerMode: true,
  variableWidth: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
});

var video = document.getElementById("video__clip");
var icon = document.getElementById("video__btn-img");
function playVideo() {
  if (video.paused) {
    video.play();
    icon.src = "img/video/pause.svg";
    icon.style.transform = "translateX(0%)";
  } else {
    video.pause();
    icon.src = "img/video/play.svg";
    icon.style.transform = "translateX(8%)";
  }
}

const btnNavEl = document.querySelector(".mobile-nav-btn");
const btnNavEl2 = document.querySelector(".mobile-nav-btn2");
const headerEl = document.querySelector(".header");
const overlay = document.getElementById("overlay");
const html = document.getElementById("html");
const headerLinks = document.querySelectorAll(".header__list-link");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  html.classList.toggle("nav-open");
  headerLinks.forEach((item) => {
    item.classList.toggle("header__link-open");
  });
  // setTimeout(function () {
  //   btnNavEl.style.display = "none";
  // }, 400);
});
btnNavEl2.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  html.classList.toggle("nav-open");
  headerLinks.forEach((item) => {
    item.classList.toggle("header__link-open");
  });
});

overlay.addEventListener("click", function () {
  headerEl.classList.remove("nav-open");
  html.classList.remove("nav-open");
  headerLinks.forEach((item) => {
    item.classList.remove("header__link-open");
  });
});

function setActiveItem(event) {
  const listItems = document.querySelectorAll(".packages__item");
  listItems.forEach((item) => {
    item.classList.remove("packages__item--active");
  });
  event.target.classList.add("packages__item--active");
}

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("header__link-open")) {
      headerEl.classList.remove("nav-open");
      html.classList.remove("nav-open");
      headerLinks.forEach((item) => {
        item.classList.remove("header__link-open");
      });
    }
  });
});
