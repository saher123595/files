let play = document.getElementById('play');
let video = document.getElementById('video');
let range = document.getElementById('range');
let full = document.getElementById('full');
let ranger = document.getElementById('ranger');
let loading = document.querySelector('.overlay');
console.log(loading);

play.onclick = function() {
    if (video.paused) {
        video.play();
        play.setAttribute('class', 'fa fa-pause');
    } else {
        video.pause();
        play.setAttribute('class', 'fa fa-play');
    }
};
video.onclick = function() {
    if (video.paused) {
        video.play();
        play.setAttribute('class', 'fa fa-pause');
    } else {
        video.pause();
        play.setAttribute('class', 'fa fa-play');
    }
};
range.oninput = function() {
    video.currentTime = range.value;
};
video.ontimeupdate = function() {
    timeout.innerHTML = Math.floor(video.currentTime);
    range.value = video.currentTime;
};
window.onload = function() {
    timeout.innerHTML = video.currentTime;
    timein.innerHTML = Math.floor(video.duration);
    range.setAttribute('max', Math.floor(video.duration));
};
full.onclick = function() {
    video.requestFullscreen();
};
ranger.onclick = function() {
    video.onvoluem = ranger.value;
};