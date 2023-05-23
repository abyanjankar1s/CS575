// script.js

function showOverlay(content) {
    var overlay = document.getElementById("overlay");
    var overlayTitle = document.getElementById("overlay-title");
    overlay.style.display = "flex";
    overlayTitle.innerHTML = content;
  }
  
  function hideOverlay() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none";
  }

  function redirectToAayush() {
    var newTab = window.open("Portfolio/Aayush/index.html", "_blank");
    newTab.focus();
}

function redirectToMicah() {
  var newTab = window.open("Portfolio/Micah/index.html", "_blank");
  newTab.focus();
}

function redirectToFrank() {
  var newTab = window.open("Portfolio/Frank/index.html", "_blank");
  newTab.focus();
}

  