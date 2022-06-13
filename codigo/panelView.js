import {SongsData} from './songsData.js'
import { AddSongView } from './panelViews/addSongView.js';
import { ArtistsView } from './panelViews/artistsView.js';
import { GenresView } from './panelViews/genresView.js';
import { SongsView } from './panelViews/songsView.js';

export class PanelView {
    constructor(){
        this.documentFragment = document.createDocumentFragment();
        this.songsContainer = document.querySelector(".songs-container");
        this.songInfo = new SongsData();
    };

    // createArtistDescription(artist) {
    //     artist = `<h3>${artist}</h3>`;
    //     return artist;
    // };

    // addArtist(artist) {
    //     let artistDiv = document.createElement("DIV");
    //     let artistDescription = this.createArtistDescription(artist);
    //     artistDiv.classList.add(`flex-item`); //Agregue
    //     artistDiv.innerHTML = artistDescription;

    //     artistDiv.addEventListener('click', ()=> {
    //         this.showSongByArtist(artist);
    //     });
        
    //     this.documentFragment.appendChild(artistDiv);
    //     this.songsContainer.appendChild(this.documentFragment);
    // };

    // addGenre(genre) {
    //     let genreDiv = document.createElement("DIV");
    //     let genreDescription = this.createGenreDescription(genre);
    //     genreDiv.classList.add(`flex-item`); //Agregue
    //     genreDiv.innerHTML = genreDescription;

    //     genreDiv.addEventListener('click', ()=> {
    //         this.showSongByGenre(genre);
    //     });
        
    //     this.documentFragment.appendChild(genreDiv);
    //     this.songsContainer.appendChild(this.documentFragment);
    // };

    // createGenreDescription(genre) {
    //     genre = `<h3>${genre}</h3>`;
    //     return genre;
    // };

    // createMenuToLoadDatabase() {
    //     let menu = `<form id="form">`+
    //     `<input type="text" id="txtSong">`+
    //     `<input type="text" id="txtArtist">`+
    //     `<input type="text" id="txtGenre">`+
    //     `<input type="text" id="txtLink">`+
    //     `<button id="btnSend">Enviar</button>`+
    //     `</form>`;
    //     return menu;
    // };

    // addMenu() {
    //     let menuDiv = document.createElement("DIV");
    //     let menuDescription = this.createMenuToLoadDatabase();
    //     menuDiv.innerHTML = menuDescription;
    //     this.documentFragment.appendChild(menuDiv);
    //     this.songsContainer.appendChild(this.documentFragment);
    //     let button = document.getElementById('btnSend');
    //     button.addEventListener('click', (e) => {
    //         e.preventDefault();
    //         const form = document.getElementById('form');
    //         const txtSong = document.getElementById('txtSong');
    //         const txtArtist = document.getElementById('txtArtist');
    //         const txtGenre = document.getElementById('txtGenre');
    //         const txtLink = document.getElementById('txtLink');

    //         this.songInfo.addSong(txtSong.value, txtArtist.value, txtGenre.value, txtLink.value)
    //         form.reset();
    //     });
    // };

    removeAllChilds(){
        while(this.songsContainer.hasChildNodes())
        this.songsContainer.removeChild(this.songsContainer.firstChild);
    };

    showArtists(){
        this.removeAllChilds();
        this.currentView = new ArtistsView(this.songsContainer);

        let arrArtists = this.songInfo.getArtists();
        arrArtists.forEach(artist => {
             this.currentView.addArtist(artist, this);
        })
    };

    showGenres(){
        this.removeAllChilds();
        this.currentView = new GenresView(this.songsContainer);
        let arrGenres = this.songInfo.getGenres();

        arrGenres.forEach(genre => {
            this.currentView.addGenre(genre, this);
        });
    };

    showSongs(){
        this.removeAllChilds();
        this.currentView = new SongsView(this.songsContainer);
        let songsArr = this.songInfo.getSongs();
        
        songsArr.forEach(song => {
                this.currentView.addSong(song.name, song.artist, song.genre, song.link);
        });
    };

    showAddSongView(){
        this.removeAllChilds();
        this.currentView = new AddSongView(this.songsContainer);
        this.currentView.addMenu(this.songInfo);
    };

    // createSongDescription(name, artist, genre) {
    //     name = `<h2>${name}</h2>`;
    //     artist = `<h3>${artist}</h3>`;
    //     genre = `<p><b>${genre}</b></p>`;
    //     return [name, artist, genre];
    // };

    // addSong(name, artist, genre, link) {
    //     let songDiv = document.createElement("DIV");
    //     let songDescription = this.createSongDescription(name, artist, genre);
    //     songDiv.classList.add(`flex-item`); //Agregue
    //     songDiv.innerHTML = songDescription[0] + songDescription[1] + songDescription[2];

    //     songDiv.addEventListener('click', (e) => {
    //         window.open(link);
    //     });

    //     this.documentFragment.appendChild(songDiv);
    //     this.songsContainer.appendChild(this.documentFragment);
    // };

    showSongByArtist(artist){
        this.removeAllChilds();
        this.currentview = new SongsView(this.songsContainer);
        let songsArr = this.songInfo.getSongs();

        songsArr.forEach(song => {
            if(song.artist == artist) {
            this.currentview.addSong(song.name, song.artist, song.genre, song.link);
            }
        });
    };

    showSongByGenre(genre){
        this.removeAllChilds();
        this.currentview = new SongsView(this.songsContainer);
        let songsArr = this.songInfo.getSongs();

        songsArr.forEach(song => {
            if(song.genre == genre) {
            this.currentview.addSong(song.name, song.artist, song.genre, song.link);
            }
        });
    };
}

