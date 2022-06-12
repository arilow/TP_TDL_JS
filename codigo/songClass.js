//TODO: Actualizar cuando cargo las canciones al arreglo , ahora a la clase.
//TODO: Toco el boton, ahora a la clase.

import {cargarCanciones} from './index.js';
import {addSong} from './menu.js';
import {addMenu} from './menu.js';

export class SongView {

    constructor(){
        this.songsContainer = document.querySelector(".songs-container");
    };

    removeAllChilds(){
        while(this.songsContainer.hasChildNodes())
        this.songsContainer.removeChild(this.songsContainer.firstChild); 
    };

    showArtists(){
        this.removeAllChilds();
        cargarCanciones();

        let arrAux = [];
        let contador = this.songsContainer.children.length;

        for(let i = 0; i < contador; i++){
            arrAux[i] = this.songsContainer.children[i].getElementsByTagName('h3')[0].innerHTML;
        }

        this.removeAllChilds();

        for(let i = 0; i < contador; i++){
            addSong(arrAux[i]);
        }
    };

    showGenres(){
        this.removeAllChilds();
        cargarCanciones();

        let arrAux = [];
        let contador = this.songsContainer.children.length;

        for(let i = 0; i < contador; i++){
            arrAux[i] = this.songsContainer.children[i].getElementsByTagName('p')[0].innerText;
        }

        this.removeAllChilds();

        for(let i = 0; i < contador; i++){
            addSong(arrAux[i]);
        }
    };

    showSong(){
        this.removeAllChilds();
        cargarCanciones();
    };

    showAddSongView(){
        this.removeAllChilds();
        addMenu();
    };

    showSongByArtist(){};
    showSongByGenre(){};
}

export class SongsData {
    constructor() {
        this.songs = [];
        this.genres = new Set();
        this.artists = new Set();
    }
}

export class Song {
    constructor() {
        this.name;
        this.genre;
        this.artist;
    }
}