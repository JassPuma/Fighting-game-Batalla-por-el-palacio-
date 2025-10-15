// PANTALLA INICIO
const videoInicio = document.getElementById('video_inicio');
videoInicio.src = 'assets/videos/video_inicio.mp4';
videoInicio.load();
videoInicio.play();

// Sonidos
const soundCondor = new Audio('assets/sounds/condor_bossa.mp3');
const soundClick = new Audio('assets/sounds/click.mp3');

// Botón Start
document.getElementById('btnStart').addEventListener('click', () => {
  soundCondor.play();
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('transition-screen').style.display = 'flex';
});

// Botón Skip en transición
document.getElementById('btnSkip').addEventListener('click', () => {
  soundClick.play();
  showPalacioScreen();
});

// Función para mostrar la pantalla del palacio
function showPalacioScreen() {
  document.getElementById('transition-screen').style.display = 'none';
  document.getElementById('palacio-screen').style.display = 'flex';

  const palacioVideo = document.getElementById('palacio-video');
  palacioVideo.src = 'assets/videos/palacio.mp4';
  palacioVideo.load();
  palacioVideo.play();
}

// Botones de palacio
document.getElementById('btnPlay').addEventListener('click', () => {
  soundClick.play();
  document.getElementById('palacio-screen').style.display = 'none';
  document.getElementById('select-screen').style.display = 'block';
  loadCharacters();
});

document.getElementById('btnExit').addEventListener('click', () => {
  soundClick.play();
  alert('Gracias por jugar!');
});

// Función para cargar personajes (desde characters.js)
function loadCharacters() {
  const container = document.getElementById('characters-container');
  container.innerHTML = ''; // limpiar

  characters.forEach(char => {
    const card = document.createElement('div');
    card.classList.add('character-card');
    const img = document.createElement('img');
    img.src = char.sprite;
    const name = document.createElement('p');
    name.textContent = char.name;
    card.appendChild(img);
    card.appendChild(name);

    card.addEventListener('click', () => {
      soundClick.play();
      selectCharacter(char);
    });

    container.appendChild(card);
  });
}

// Seleccionar personaje y empezar juego
function selectCharacter(character) {
  document.getElementById('select-screen').style.display = 'none';
  document.getElementById('main-game').style.display = 'block';
  startGame(character);
}

// FUNCIONES DEL JUEGO
function startGame(character) {
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');

  // Fondo
  const bg = new Image();
  bg.src = 'assets/images/muro.jpg';
  bg.onload = () => {
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
  };

  // Sprite del jugador
  const player = new Image();
  player.src = character.sprite;
  player.onload = () => {
    ctx.drawImage(player, 100, 400, 128, 128);
  };

  // Aquí puedes agregar lógica de IA, animaciones, combate, etc.
}
