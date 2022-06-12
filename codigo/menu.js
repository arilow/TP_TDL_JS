import {add, getSongCollection} from './firebase.js'
import {cargarCanciones} from './index.js';

const submenu = document.querySelector(".submenu");
let documentFragment = document.createDocumentFragment();

const songsContainer = document.querySelector(".songs-container");
const todo = document.getElementById('todo');
const genero = document.getElementById('genero');
const artista = document.getElementById('artista');
const agregar = document.getElementById('agregar');

todo.addEventListener('click', (e) => {
    e.preventDefault();

    removeAllChilds(songsContainer);

    cargarCanciones();
});

artista.addEventListener('click', (e) => {
    e.preventDefault();

    removeAllChilds(songsContainer);

    cargarCanciones();

    let arrAux = [];

    let contador = songsContainer.children.length;

    for(let i = 0; i < contador; i++){
        arrAux[i] = songsContainer.children[i].getElementsByTagName('h3')[0].innerHTML;
    }

    removeAllChilds(songsContainer);

    for(let i = 0; i < contador; i++){
        addSong(arrAux[i]);
    }

    console.log(songsContainer);
});

genero.addEventListener('click', (e) => {

    removeAllChilds(songsContainer);

    cargarCanciones();

    e.preventDefault();

    let arrAux = [];

    let contador = songsContainer.children.length;

    for(let i = 0; i < contador; i++){
        arrAux[i] = songsContainer.children[i].getElementsByTagName('p')[0].innerText;
    }

    removeAllChilds(songsContainer);

    for(let i = 0; i < contador; i++){
        addSong(arrAux[i]);
    }

    console.log(songsContainer);
});

agregar.addEventListener('click', (e) => {

    e.preventDefault();

    removeAllChilds(songsContainer);

    addMenu();

    console.log(songsContainer);
});

function removeAllChilds(songsContainer)
{
    while(songsContainer.hasChildNodes())
    songsContainer.removeChild(songsContainer.firstChild);
}

function createArtistDescription(artista) {
    artista = `<h3>${artista}</h3>`;

    return artista;
}

function crearMenuCargaBaseDato() {
    let menu = `<form id="form">`+
    `<input type="text" id="txtSong">`+
    `<input type="text" id="txtArtist">`+
    `<input type="text" id="txtGenere">`+
    `<button id="btnSend">Enviar</button>`+
    `</form>`;
    return menu;
}

function addMenu() {
    let menuDiv = document.createElement("DIV");
    let menuDescription = crearMenuCargaBaseDato();
    menuDiv.innerHTML = menuDescription;
    documentFragment.appendChild(menuDiv);
    songsContainer.appendChild(documentFragment);
    let button = document.getElementById('btnSend');
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const form = document.getElementById('form');
        const txtSong = document.getElementById('txtSong');
        const txtArtist = document.getElementById('txtArtist');
        const txtGenere = document.getElementById('txtGenere');
        const btnSend = document.getElementById('btnSend');
        add(txtSong.value, txtArtist.value, txtGenere.value);
        alert("Mande a la base de datos");
        form.reset();
    });
}

function addSong(artista) {
    let songDiv = document.createElement("DIV");
    let songDescription = createArtistDescription(artista);
    songDiv.innerHTML = songDescription;
    documentFragment.appendChild(songDiv);
    songsContainer.appendChild(documentFragment);
}
