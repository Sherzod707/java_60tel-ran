const circles = document.querySelectorAll('.circle');

function startAnimation() {
    circles.forEach(function(circle) {
        circle.style.animationPlayState = 'running';
    });
}

function stopAnimation() {
    circles.forEach(function(circle) {
        circle.style.animationPlayState = 'paused';
    });
}