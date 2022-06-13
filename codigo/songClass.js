import {getSongCollection} from './firebase.js'

const songsContainer = document.querySelector(".songs-container");
let documentFragment = document.createDocumentFragment();

export class SongView {
    constructor(){
        this.songsContainer = document.querySelector(".songs-container");
        this.songInfo = new SongsData();
    };

    createArtistDescription(artist) {
        artist = `<h3>${artist}</h3>`;
        return artist;
    };

    addSong(artists) {
        let songDiv = document.createElement("DIV");
        let songDescription = this.createArtistDescription(artists);
        songDiv.classList.add(`flex-item`); //Agregue
        songDiv.innerHTML = songDescription;
        documentFragment.appendChild(songDiv);
        songsContainer.appendChild(documentFragment);
    };

    createMenuToLoadDatabase() {
        let menu = `<form id="form">`+
        `<input type="text" id="txtSong">`+
        `<input type="text" id="txtArtist">`+
        `<input type="text" id="txtGenere">`+
        `<button id="btnSend">Enviar</button>`+
        `</form>`;
        return menu;
    };

    addMenu() {
        let menuDiv = document.createElement("DIV");
        let menuDescription = this.createMenuToLoadDatabase();
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
            form.reset();
        });
    };

    initializeVisual() {
        this.songInfo.getSongsFromDatabase();
    };

    removeAllChilds(){
        while(this.songsContainer.hasChildNodes())
        this.songsContainer.removeChild(this.songsContainer.firstChild);
    };

    showArtists(){
        this.removeAllChilds();
        this.songInfo.loadSongs();

        let arrAux = [];
        let counter = this.songsContainer.children.length;

        for(let i = 0; i < counter; i++){
            arrAux[i] = this.songsContainer.children[i].getElementsByTagName('h3')[0].innerHTML;
        }

        this.removeAllChilds();

        for(let i = 0; i < counter; i++){
            this.addSong(arrAux[i]);
        }
    };

    showGenres(){
        this.removeAllChilds();
        this.songInfo.loadSongs();

        let arrAux = [];
        let counter = this.songsContainer.children.length;

        for(let i = 0; i < counter; i++){
            arrAux[i] = this.songsContainer.children[i].getElementsByTagName('p')[0].innerText;
        }

        this.removeAllChilds();

        for(let i = 0; i < counter; i++){
            this.addSong(arrAux[i]);
        }
    };

    showSong(){
        this.removeAllChilds();
        this.songInfo.loadSongs();
    };

    showAddSongView(){
        this.removeAllChilds();
        this.addMenu();
    };

    showSongByArtist(){};
    showSongByGenre(){};
}

export class SongsData {
    constructor() {
        this.songs = [];
        this.genres = new Set();
        this.artists = new Set();
    };

    loadSongs() {
        this.songs.forEach(song => {
            this.addSong(song.name, song.artist, song.genre);
        });
    };

    getSongsFromDatabase() {
        window.addEventListener('DOMContentLoaded', async () => {
            const querytSnapshot = await getSongCollection();
            querytSnapshot.forEach(doc => {
                this.songs.push(doc.data());
            });
            this.loadSongs();
        });
    };

    createSongDescription(name, artist, genre) {
        name = `<h2>${name}</h2>`;
        artist = `<h3>${artist}</h3>`;
        genre = `<p><b>$${genre}</b></p>`;
        return [name, artist, genre];
    };

    addSong(name, artist, genre) {
        let songDiv = document.createElement("DIV");
        let songDescription = this.createSongDescription(name, artist, genre);
        songDiv.classList.add(`flex-item`); //Agregue
        songDiv.innerHTML = songDescription[0] + songDescription[1] + songDescription[2];

        documentFragment.appendChild(songDiv);
        songsContainer.appendChild(documentFragment);
    };
}
