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

class TypewriterEffect {
    constructor(elementId, audioSrc, options = {}) {
        this.element = document.getElementById(elementId);
        this.audioSrc = audioSrc;
        this.speed = options.speed || 50; // milisegundos entre caracteres
        this.isTyping = false;
        this.currentText = '';
        this.currentIndex = 0;
        
        // Precargar el audio
        this.typeSound = new Audio(audioSrc);
        this.typeSound.volume = options.volume || 0.3;
        this.typeSound.preload = 'auto';
        this.typeSound.loop = true; // Repetir el sonido mientras se escribe
    }

    async typeText(text) {
        return new Promise((resolve) => {
            // Si ya está escribiendo, cancelar
            if (this.isTyping) {
                this.stopTyping();
            }

            this.isTyping = true;
            this.currentText = text;
            this.currentIndex = 0;
            this.element.innerHTML = ''; // Limpiar contenido actual

            // Iniciar el sonido al comenzar a escribir
            this.typeSound.currentTime = 0;
            this.typeSound.play().catch(e => {
                console.log('Audio play prevented:', e);
            });

            const typeNextCharacter = () => {
                if (!this.isTyping || this.currentIndex >= this.currentText.length) {
                    this.isTyping = false;
                    // Detener el sonido al terminar
                    this.typeSound.pause();
                    this.typeSound.currentTime = 0;
                    resolve(); // Terminar la promesa
                    return;
                }

                // Obtener el carácter actual
                const currentChar = this.currentText[this.currentIndex];
                
                if (currentChar === '\n') {
                    // Agregar un elemento <br> para el salto de línea
                    this.element.appendChild(document.createElement('br'));
                } else {
                    // Agregar el carácter como nodo de texto
                    this.element.appendChild(document.createTextNode(currentChar));
                }

                this.currentIndex++;
                setTimeout(typeNextCharacter, this.speed);
            };

            typeNextCharacter();
        });
    }

    stopTyping() {
        this.isTyping = false;
        // Detener el sonido al saltar
        this.typeSound.pause();
        this.typeSound.currentTime = 0;
        // Mostrar el texto completo inmediatamente, preservando saltos de línea
        if (this.currentText) {
            this.element.innerHTML = this.currentText.replace(/\n/g, '<br>');
        }
    }

    // Método para cambiar la velocidad
    setSpeed(newSpeed) {
        this.speed = newSpeed;
    }

    // Método para cambiar el volumen
    setVolume(volume) {
        this.typeSound.volume = Math.max(0, Math.min(1, volume));
    }
}