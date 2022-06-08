import {add} from './firebase.js'

const txtSong = document.getElementById('txtSong')
const txtArtist = document.getElementById('txtArtist')
const txtGenere = document.getElementById('txtGenere')
const btnSend = document.getElementById('btnSend');

btnSend.addEventListener('click', (e)=>{
    e.preventDefault();
    add("cancion", "artista", "genero");
});