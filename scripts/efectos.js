setInterval(() => {
            if (Math.random() > 2) {
                const screen = document.querySelector('.crt-screen');
                screen.style.filter = 'brightness(3) contrast(10)';
                setTimeout(() => {
                    screen.style.filter = '';
                }, 50);
            }
        }, 3000);