let currentScene = "inicio";
let history = []; // guarda las escenas previas
let isRendering = false; // Bandera para evitar renderizaciones simultáneas
let gameStarted = false; // Controla si el juego ha comenzado

// Inicializar el sistema typewriter
const typewriter = new TypewriterEffect('description-text', './sounds/typewriter.ogg', {
    speed: 50, // Velocidad en ms (más bajo = más rápido)
    volume: 0.3 // Volumen del sonido (0.0 a 1.0)
});

const scenes = {
    ...scenesInicio,
    ...scenesTrabajo,
    ...scenesCiudad,
    ...scenesFinales
};

// Función para iniciar el juego
async function startGame() {
    if (gameStarted) return;
    
    gameStarted = true;
    
    const startScreen = document.getElementById('start-screen');
    const gameContainer = document.getElementById('game-container');
    
    // Agregar clase de fade-out a la pantalla de inicio
    startScreen.classList.add('start-fade-out');
    
    // Esperar a que termine el fade-out
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Ocultar pantalla de inicio y mostrar juego inmediatamente
    startScreen.style.display = 'none';
    gameContainer.style.display = 'flex';
    
    // Iniciar música si está habilitada
    const music = document.getElementById('background-music');
    if (isMusicEnabled && music.paused) {
        music.play().catch(e => console.log('Audio play prevented:', e));
    }
    
    // Renderizar la primera escena sin delays extras
    renderScene();
}

function renderChoices(scene) {
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = ""; // Limpiar botones anteriores

    scene.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.innerText = choice.text;
        btn.classList.add('fade-in'); // Agregar clase para animación
        btn.onclick = () => {
            if (!isRendering) { // Solo permitir clics si no está renderizando
                history.push(currentScene); // Guardar la escena actual
                currentScene = choice.next;
                renderScene();
            }
        };
        choicesContainer.appendChild(btn);
    });
}

async function renderScene() {
    if (isRendering) return; // Evitar renderizaciones simultáneas
    isRendering = true; // Bloquear nuevas renderizaciones

    try {
        const scene = scenes[currentScene];
        
        // Si es la primera vez que se renderiza, agregar efectos fade-in
        const isFirstRender = !gameStarted || currentScene === "inicio";
        
        const sceneTextEl = document.getElementById("scene-text");
        const sceneImageEl = document.getElementById("scene-image");
        const descriptionTextEl = document.getElementById("description-text");
        
        // Limpiar clases de animación previas
        sceneTextEl.classList.remove('fade-in');
        sceneImageEl.classList.remove('fade-in');
        descriptionTextEl.classList.remove('fade-in');
        
        // Configurar contenido
        sceneTextEl.innerText = scene.text;
        sceneImageEl.src = `images/${scene.image}`;
        
        const backBtn = document.getElementById("back-button");
        backBtn.style.display = currentScene === "inicio" ? "none" : "inline-block";
        backBtn.onclick = () => {
            if (!isRendering && history.length > 0) { // Solo permitir retroceso si no está renderizando
                currentScene = history.pop(); // Volver a la última escena
                renderScene();
            }
        };

        // Limpiar opciones antes de empezar el typewriter
        const choicesContainer = document.getElementById("choices");
        choicesContainer.innerHTML = "";

        // Iniciar typewriter y esperar a que termine
        await typewriter.typeText(scene.description);

        // Renderizar opciones después de que termine el typewriter
        renderChoices(scene);
    } finally {
        isRendering = false; // Liberar el bloqueo una vez que termina
    }
}

// Función para manejar el salto del typewriter
function skipTypewriter() {
    if (typewriter.isTyping) {
        typewriter.stopTyping();
        // Renderizar opciones inmediatamente al saltar
        renderChoices(scenes[currentScene]);
    }
}

// Event listeners para la pantalla de inicio
document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('start-screen');

    // Hacer clic en cualquier parte de la pantalla de inicio
    startScreen.addEventListener('click', startGame);

    // También permitir Enter o Espacio para comenzar
    document.addEventListener('keydown', (e) => {
        if (!gameStarted && (e.key === 'Enter' || e.key === ' ')) {
            startGame();
            e.preventDefault();
        }
    });
});

// Permitir al usuario saltar el typewriter haciendo clic en cualquier parte del contenedor, scene-text o scene-image
document.getElementById('description-text').addEventListener('click', skipTypewriter);
document.getElementById('scene-text').addEventListener('click', skipTypewriter);
document.getElementById('scene-image').addEventListener('click', skipTypewriter);

document.addEventListener('keydown', (e) => {
    if (gameStarted && (e.key === 'Enter' || e.key === ' ') && typewriter.isTyping) {
        typewriter.stopTyping();
        // Renderizar opciones inmediatamente al saltar
        renderChoices(scenes[currentScene]);
        e.preventDefault();
    }
});

// No cargar la escena automáticamente al cargar la página
window.onload = () => {
    // La pantalla de inicio ya está visible por defecto
    console.log('Juego cargado. Presiona para comenzar.');
};