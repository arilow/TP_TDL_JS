import {add, getSongCollection} from './firebase.js'

const songsContainer = document.querySelector(".songs-container");
let documentFragment = document.createDocumentFragment();

const form = document.getElementById('form');
const txtSong = document.getElementById('txtSong');
const txtArtist = document.getElementById('txtArtist');
const txtGenere = document.getElementById('txtGenere');
const btnSend = document.getElementById('btnSend');

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

btnSend.addEventListener('click', (e) => {
    e.preventDefault();

   add(txtSong.value, txtArtist.value, txtGenere.value);
   form.reset();

    // documentFragment.reset();
    // songsContainer.reset();
    // init();
});

function createSongDescription(nombre, artista, genero) {
//    img = "<img class='llave-img' src='llave.jpeg'>"
    nombre = `<h2>${nombre}</h2>`;
    artista = `<h3>${artista}</h3>`;
    genero = `<p><b>$${genero}</b></p>`;
//    return [img, nombre, modelo, precio];
    return [nombre, artista, genero];
}

function addSong(nombre, artista, genero) {
    let songDiv = document.createElement("DIV");
    let songDescription = createSongDescription(nombre, artista, genero);
    songDiv.innerHTML = songDescription[0] + songDescription[1] + songDescription[2];
    
    documentFragment.appendChild(songDiv);
    
    songsContainer.appendChild(documentFragment);    
}





