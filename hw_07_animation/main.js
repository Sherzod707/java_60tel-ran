        const circles = document.querySelectorAll('.circle');
        const startButton = document.getElementById('start');
        const stopButton = document.getElementById('stop');

        // Animatsiyalarni boshlash funksiyasi
        startButton.addEventListener('click', () => {
            circles.forEach(circle => {
                circle.style.animationPlayState = 'running';
            });
        });

        // Animatsiyalarni to'xtatish funksiyasi
        stopButton.addEventListener('click', () => {
            circles.forEach(circle => {
                circle.style.animationPlayState = 'paused';
            });
        });