let currentScene = "inicio";
let history = []; // guarda las escenas previas

function renderScene() {
    const scene = scenes[currentScene];

    document.getElementById("scene-text").innerText = scene.text;
    document.getElementById("scene-image").src = `images/${scene.image}`;
    document.getElementById("description-text").innerText = scene.description;
    document.getElementById("back-button").onclick = () => {
        if (history.length > 0) {
            currentScene = history.pop(); // Volver a la última escena
            renderScene();
        }
    };

    const backBtn = document.getElementById("back-button");
    if (currentScene === "inicio") {
        backBtn.style.display = "none";
    } else {
        backBtn.style.display = "inline-block";
    }

    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = ""; // Limpiar botones anteriores

    scene.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.innerText = choice.text;
        btn.onclick = () => {
            history.push(currentScene); // Guardar la escena actual
            currentScene = choice.next;
            renderScene();
        };
        choicesContainer.appendChild(btn);
    });
}

window.onload = () => {
    renderScene();
};