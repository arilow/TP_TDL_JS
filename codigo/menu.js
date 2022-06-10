import {add, getSongCollection} from './firebase.js'

const submenu = document.querySelector(".submenu");
let documentFragment = document.createDocumentFragment();

const todo = document.getElementById('todo');
const genero = document.getElementById('genero');
const artista = document.getElementById('artista');


const cambiarColor = (e) => {
    window.addEventListener("click", () => {
        alert("Deberia cambiar la interfaz");
    });
    window.removeEventListener("click");
    e.stopPropagation();
}

todo.addEventListener('click', cambiarColor());
genero.addEventListener('click', cambiarColor());
artista.addEventListener('click', cambiarColor());






