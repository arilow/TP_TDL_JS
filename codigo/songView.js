import {SongsData} from './songsData.js'


export class SongView {
    constructor(){
        this.documentFragment = document.createDocumentFragment();
        this.songsContainer = document.querySelector(".songs-container");
        this.songInfo = new SongsData();
    };

    createArtistDescription(artist) {
        artist = `<h3>${artist}</h3>`;
        return artist;
    };

    addArtist(artists) {
        let songDiv = document.createElement("DIV");
        let songDescription = this.createArtistDescription(artists);
        songDiv.classList.add(`flex-item`); //Agregue
        songDiv.innerHTML = songDescription;
        this.documentFragment.appendChild(songDiv);
        this.songsContainer.appendChild(this.documentFragment);
    };

    createMenuToLoadDatabase() {
        let menu = `<form id="form">`+
        `<input type="text" id="txtSong">`+
        `<input type="text" id="txtArtist">`+
        `<input type="text" id="txtGenre">`+
        `<input type="text" id="txtLink">`+
        `<button id="btnSend">Enviar</button>`+
        `</form>`;
        return menu;
    };

    addMenu() {
        let menuDiv = document.createElement("DIV");
        let menuDescription = this.createMenuToLoadDatabase();
        menuDiv.innerHTML = menuDescription;
        this.documentFragment.appendChild(menuDiv);
        this.songsContainer.appendChild(this.documentFragment);
        let button = document.getElementById('btnSend');
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const form = document.getElementById('form');
            const txtSong = document.getElementById('txtSong');
            const txtArtist = document.getElementById('txtArtist');
            const txtGenre = document.getElementById('txtGenre');
            const txtLink = document.getElementById('txtLink');

            this.songInfo.addSong(txtSong.value, txtArtist.value, txtGenre.value, txtLink.value)
            form.reset();
        });
    };

    removeAllChilds(){
        while(this.songsContainer.hasChildNodes())
        this.songsContainer.removeChild(this.songsContainer.firstChild);
    };

    showArtists(){
        this.removeAllChilds();

        let arrArtists = this.songInfo.getArtists();
        arrArtists.forEach(artist => {
            this.addArtist(artist);
        })
    };

    showGenres(){
        this.removeAllChilds();

        let arrGenres = this.songInfo.getGenres();
        arrGenres.forEach(genre => {
            this.addArtist(genre);
        })
    };

    showSongs(){
        this.removeAllChilds();
        let songsArr = this.songInfo.getSongs();

        songsArr.forEach(song => {
            this.addSong(song.name, song.artist, song.genre, song.link);
        });
    };

    showAddSongView(){
        this.removeAllChilds();
        this.addMenu();
    };

    createSongDescription(name, artist, genre) {
        name = `<h2>${name}</h2>`;
        artist = `<h3>${artist}</h3>`;
        genre = `<p><b>$${genre}</b></p>`;
        return [name, artist, genre];
    };

    addSong(name, artist, genre, link) {
        let songDiv = document.createElement("DIV");
        let songDescription = this.createSongDescription(name, artist, genre);
        songDiv.classList.add(`flex-item`); //Agregue
        songDiv.innerHTML = songDescription[0] + songDescription[1] + songDescription[2];

        songDiv.addEventListener('click', (e) => {
            window.open(link);
        });

        this.documentFragment.appendChild(songDiv);
        this.songsContainer.appendChild(this.documentFragment);
    };

    showSongByArtist(){};
    showSongByGenre(){};
}

