let opend = document.getElementById('sing-in');
let open = document.getElementById('open');
let username = document.getElementById('username');
let password = document.getElementById('password');
let sign = document.getElementById('sign');
let welcome = document.getElementById('welcome');
let body = document.querySelector('body');
let message = document.getElementById('message');
let onkeyup = document.getElementById('onkeyup');
let actions = document.getElementById('actions');

open.onclick = function() {
    opend.classList.toggle('scale');
    body.classList.toggle('position');
};

message.onkeyup = function() {
    if (message.value != '') {
        onkeyup.innerHTML = message.value;
        onkeyup.classList.add('transform');
    } else {
        onkeyup.classList.remove('transform');
    }
};

let text = 'All your files in one secure location, accessible anywhere.';
let cindex = 0;
let myT = setInterval(() => {
    welcome.innerHTML += text[cindex++];
    if (cindex >= text.length) {
        clearInterval(myT);
        let saher = setInterval(() => {
            welcome.innerHTML = 'wlecome';
            let nmw = document.createElement('h2');
            nmw.innerHTML = text;
            actions.prepend(nmw);
            clearInterval(saher);
        }, 1000);
    }
}, 100);