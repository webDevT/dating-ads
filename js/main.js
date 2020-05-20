 document.getElementById('video-btn').onclick = function() {
  document.getElementById('wistia_responsive_padding').classList.add('active');
}

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);