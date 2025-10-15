<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Selecciona tu personaje</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<h1>Selecciona tu personaje</h1>

<div class="characters" id="charactersContainer"></div>

<script type="module">
import { characters } from './js/characters.js';

const container = document.getElementById('charactersContainer');

// Generar los personajes dinámicamente
for (const key in characters) {
    const char = characters[key];
    const div = document.createElement('div');
    div.classList.add('character');
    div.dataset.name = key;
    div.style.border = `2px solid ${char.color}`;
    div.style.color = char.color;
    div.innerHTML = `
        <span>${char.name}</span>
        <p>Arma: ${char.weapon}</p>
        <p>Especial: ${char.special} (${char.specialPower})</p>
    `;
    container.appendChild(div);

    // Evento click para guardar selección y pasar a game.html
    div.addEventListener('click', () => {
        localStorage.setItem('selectedCharacter', key);
        alert(`Has seleccionado a ${char.name}`);
        window.location.href = 'game.html';
    });
}
</script>

</body>
</html>
