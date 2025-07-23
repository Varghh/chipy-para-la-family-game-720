let currentScene = "inicio";
let history = [];

function renderScene() {
  const scene = scenes[currentScene];

  document.getElementById("scene-text").innerText = scene.text;
  document.getElementById("scene-image").src = `images/${scene.image}`;
  document.getElementById("description-text").innerText = scene.description;

  const choicesContainer = document.getElementById("choices");
  choicesContainer.innerHTML = ""; // Limpiar botones anteriores

  scene.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.innerText = choice.text;
    btn.onclick = () => {
      currentScene = choice.next;
      renderScene();
    };
    choicesContainer.appendChild(btn);
  });
}

window.onload = () => {
  renderScene();
};