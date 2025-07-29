const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const scoreElement = document.querySelector('.score');
const gameOver = document.querySelector('.game-over');
const reiniciar = document.querySelector('.reiniciar');

let score = 0;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 90){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'imgs/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px'

        gameOver.style.display = 'flex'

        clearInterval(loop);

        document.addEventListener('keydown', () => location.reload(), { once: true });
    }

    if (pipePosition <= 0) {
        score += 10;
        scoreElement.innerText = `${score}`
    }
}, 10);

reiniciar.addEventListener('click', () => {
    location.reload();
});

document.addEventListener('keydown', jump)
