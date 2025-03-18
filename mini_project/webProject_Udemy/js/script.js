let menuBtn = document.getElementById("btn-menu");
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu(e) {
  let overlayDiv = document.getElementsByClassName("overlay")[0];
  let speed = 10;
  let eventTarget = e.target;
  if (eventTarget.className == "btn-open") {
    fadeIn(overlayDiv, speed);
    eventTarget.className = "btn-close";
  } else if (eventTarget.className == "btn-close") {
    fadeOut(overlayDiv, speed);
    eventTarget.className = "btn-open";
  }
}

function fadeIn(ele, speed) {
  var inInterval = setInterval(
    function () {
      ele.style.opacity = Number(ele.style.opacity) + 0.02;
      if (ele.style.opacity >= 1) {
        ele.style.opacity = 1;
        clearInterval(inInterval);
      }
    },speed
  );
}

function fadeOut(ele, speed) {
  var outInterval = setInterval(
    function () {
      ele.style.opacity = Number(ele.style.opacity) - 0.02;
      if (ele.style.opacity <=0) {
        ele.style.opacity = 0;
        clearInterval(outInterval);
      }
    },speed
  );
}
