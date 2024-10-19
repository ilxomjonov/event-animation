


const BALL = document.getElementById('BALL')
        
let inter;

function PLAY(text) {
    if (text === 'play') {
        inter = setInterval(() => {
            BALL.style.bottom = Math.floor(Math.random() * 400) + 'px';
            BALL.style.right = Math.floor(Math.random() * 400) + 'px';
        }, 1000);
    } else if (text === 'stop') {
        clearInterval(inter);
        inter = null;
    }
 }


