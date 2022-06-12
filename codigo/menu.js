import {add, getSongCollection} from './firebase.js'
import { MenuView } from './menuClass.js';
import { SongsData } from './songClass.js';

let documentFragment = document.createDocumentFragment();

const songsContainer = document.querySelector(".songs-container");
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
