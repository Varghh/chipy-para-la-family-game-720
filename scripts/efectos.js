// Efecto "glitch"
setInterval(() => {
            if (Math.random() > 2) {
                const screen = document.querySelector('.crt-screen');
                screen.style.filter = 'brightness(3) contrast(10)';
                setTimeout(() => {
                    screen.style.filter = '';
                }, 50);
            }
        }, 3000);

        // Función para activar/desactivar efectos CRT
        function toggleCRT() {
            const screen = document.querySelector('.crt-screen');
            const toggle = document.querySelector('.crt-toggle');
            
            screen.classList.toggle('crt-off');
            toggle.textContent = screen.classList.contains('crt-off') ? 'CRT: OFF' : 'CRT: ON';
        }
        