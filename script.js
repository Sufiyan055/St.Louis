// parallax to move the icon image along with the mouse

document.addEventListener("mousemove", (event) => {
  const x = event.clientX / window.innerWidth - 0.5; // to calculate the x position of the mouse relative to the window width
  const y = event.clientY / window.innerHeight - 0.5; // to calculate the y position of the mouse relative to the window height

  document.querySelectorAll(".parallax").forEach((element) => {
    const speed = element.getAttribute("data-speed"); // get the speed of the element from the data-speed attribute

    //after getting these data we will transition the element to the new position
    element.style.transform = `translate(${x * speed * 30}px, ${
      y * speed * 30
    }px)`; // the 30 is a multiplier to increase the effect of the parallax
  });
});

// for btn and btn2
const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");

// this is for when hovering the btn2
btn2.addEventListener("mouseenter", function () {
  btn.classList.add("hovered");
});

btn2.addEventListener("mouseleave", function () {
  btn.classList.remove("hovered"); // Remove class when mouse leaves
});

// this is for when hovering the btn

btn.addEventListener("mouseenter", function () {
  btn2.classList.add("hovered");
});

btn.addEventListener("mouseleave", function () {
  btn2.classList.remove("hovered"); // Remove class when mouse leaves
});

// Achievements section Counter+++
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".num");

  function startCounting(counter) {
    const target = +counter.getAttribute("data-target");
    const increment = target / 100;
    let count = 0;

    const interval = setInterval(() => {
      count += increment;
      if (count >= target) {
        counter.innerText = target;
        clearInterval(interval);
      } else {
        counter.innerText = Math.ceil(count);
      }
    }, 20);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          startCounting(counter);
          observer.unobserve(counter);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  counters.forEach((counter) => observer.observe(counter));
});
// Achievements section Counter---ENd
/*
let navbar = document.querySelector(".navBar");
let menuToggleid = document.querySelector("#menuToggleid");

toggleNav = () => {
  navbar.classList.toggle("navbarDisplayForSmallD");
  menuToggleid.classList.toggle("active");
};
*/
