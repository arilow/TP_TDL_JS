import { MenuView } from './menuClass.js';

const all = document.getElementById('todo');
const genre = document.getElementById('genero');
const artist = document.getElementById('artista');
const addSongs = document.getElementById('agregar');

let menu = new MenuView(all, artist, genre, addSongs);

menu.initializeVisual();
menu.touchButtonAll();
menu.touchButtonArtists();
menu.touchButtonGenres();
menu.touchButtonAddSong();
