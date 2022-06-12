import {add, getSongCollection} from './firebase.js'

const songsContainer = document.querySelector(".songs-container");
let documentFragment = document.createDocumentFragment();

let arr = [];

const init = () => {
    arr.forEach(song => {
        addSong(song.name, song.artist, song.genere);
    });
}

window.addEventListener('DOMContentLoaded', async () => {
    const querytSnapshot = await getSongCollection();
    querytSnapshot.forEach(doc => {
        arr.push(doc.data());
    });
    console.log(arr[0]);

    init();
});

function createSongDescription(nombre, artista, genero) {
    nombre = `<h2>${nombre}</h2>`;
    artista = `<h3>${artista}</h3>`;
    genero = `<p><b>$${genero}</b></p>`;
    return [nombre, artista, genero];
}

function addSong(nombre, artista, genero) {
    let songDiv = document.createElement("DIV");
    let songDescription = createSongDescription(nombre, artista, genero);
    songDiv.innerHTML = songDescription[0] + songDescription[1] + songDescription[2];

    documentFragment.appendChild(songDiv);

    songsContainer.appendChild(documentFragment);
}

export const cargarCanciones = () => {init()};
