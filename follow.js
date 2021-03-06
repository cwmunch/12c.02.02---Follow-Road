window.addEventListener("DOMContentLoaded", loadSVG);

function loadSVG() {
  console.log("load the SVG");

  fetch("car_and_road.svg")
    .then((response) => response.text())
    .then((svgData) => {
      console.log("SVG loaded");

      // TODO: put the SVG into the DOM
      document.querySelector("#thesvg").innerHTML = svgData;
      // TODO: Start the animation
      document.querySelector("#car").addEventListener("click", runAnimation);
    });
}

let car = null;
let curve = null;
let currentPosition;

function runAnimation() {
  console.log("animate");

  // TODO: Build animation ...
  document.querySelector("#car").classList.add("animate");
  document.querySelector("#car").removeEventListener("click", runAnimation);
  document.querySelector("#car").addEventListener("animationend", loadSVG);
}
