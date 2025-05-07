// for Navbar

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// for mobile menu button

let navbar = document.querySelector(".navBar");
let menuToggleid = document.querySelector("#menuToggleid");

toggleNav = () => {
  navbar.classList.toggle("navbarDisplayForSmallD");
  menuToggleid.classList.toggle("active");
};
