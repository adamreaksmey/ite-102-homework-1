const homework1 = ``;

const homework2 = ``;

let body;
let scrollingDiv;
let speed = 4;

$(document).ready(function () {
  body = $(".main-body");
  scrollingDiv = $(".scrolling-div");
  scrollText();
});

function scrollText() {
  const initialPosition = window.innerWidth;
  let currentPosition = initialPosition;
  
  function animate() {
    currentPosition -= speed;

    if (currentPosition < -scrollingDiv.width()) {
      currentPosition = window.innerWidth;
    }

    scrollingDiv.css("transform", `translateX(${currentPosition}px)`);
    requestAnimationFrame(animate);
  }

  animate();
}

function switchTab(arg) {
  const content = eval(arg);
  body.html(content);
}

function revealMe(arg) {
  const btn = $(".reveal-btn");
  const info = $(".adam-info");
  if (arg) {
    btn.hide();
    info.show();
  }
  return;
}
