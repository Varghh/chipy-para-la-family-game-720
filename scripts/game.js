let currentScene = "inicio";
let history = []; // guarda las escenas previas
let isRendering = false; // Bandera para evitar renderizaciones simultáneas

// Inicializar el sistema typewriter
const typewriter = new TypewriterEffect('description-text', './sounds/typewriter.ogg', {
    speed: 50,    // Velocidad en ms (más bajo = más rápido)
    volume: 0.3   // Volumen del sonido (0.0 a 1.0)
});

const scenes = {
    ...scenesInicio,
    ...scenesTrabajo,
    ...scenesCiudad,
    ...scenesFinales
};

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
        
        document.getElementById("scene-text").innerText = scene.text;
        document.getElementById("scene-image").src = `images/${scene.image}`;
        
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

// Permitir al usuario saltar el typewriter haciendo clic en cualquier parte del contenedor, scene-text o scene-image
document.getElementById('description-text').addEventListener('click', skipTypewriter);
document.getElementById('scene-text').addEventListener('click', skipTypewriter);
document.getElementById('scene-image').addEventListener('click', skipTypewriter);

document.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && typewriter.isTyping) {
        typewriter.stopTyping();
        // Renderizar opciones inmediatamente al saltar
        renderChoices(scenes[currentScene]);
        e.preventDefault();
    }
});

window.onload = () => {
    renderScene();
};