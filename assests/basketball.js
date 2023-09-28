const ball = document.getElementById('ball');

function moveBallToPosition(x, y) {
    const ballRect = ball.getBoundingClientRect();
    const targetX = x - ballRect.width / 2;
    const targetY = y - ballRect.height / 2;
    const distanceX = targetX - ballRect.left;
    const distanceY = targetY - ballRect.top;

    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
    const duration = Math.min(1000, distance * 2);

    const scale = distanceY < 0 ? 0.5 : 1;

    ball.style.transition = `transform ${duration}ms`;
    ball.style.transform = `translate(${distanceX}px, ${distanceY}px) scale(${scale})`;

    setTimeout(() => {
        resetBall();
    }, duration);
}

function resetBall() {
    ball.style.transform = `translate(${0}px, ${0}px) scale(1)`;

    ball.style.animation = 'none';

    setTimeout(() => {
        ball.style.transform = 'translate(0, 0) scale(1)';
        ball.style.opacity = 1;

        ball.style.animation = 'bounce 0.5s 3';
    }, 1000);
}

const container = document.querySelector('.container');
container.addEventListener('click', (e) => {
    const clickX = e.clientX;
    const clickY = e.clientY;

    moveBallToPosition(clickX, clickY);
});