import {SongsData} from './songsData.js'
import { AddSongView } from './panelViews/addSongView.js';
import { ArtistsView } from './panelViews/artistsView.js';
import { GenresView } from './panelViews/genresView.js';
import { SongsView } from './panelViews/songsView.js';

export class PanelView {
    constructor(){
        this.documentFragment = document.createDocumentFragment();
        this.panelContainer = document.querySelector(".panel-container");
        this.songInfo = new SongsData();
    };

    removeAllChilds(){
        while(this.panelContainer.hasChildNodes())
        this.panelContainer.removeChild(this.panelContainer.firstChild);
    };

    showArtists(){
        this.removeAllChilds();
        this.currentView = new ArtistsView(this.panelContainer);

        let arrArtists = this.songInfo.getArtists();
        arrArtists.forEach(artist => {
             this.currentView.addArtist(artist, this);
        })
    };

    showGenres(){
        this.removeAllChilds();
        this.currentView = new GenresView(this.panelContainer);
        let arrGenres = this.songInfo.getGenres();

        arrGenres.forEach(genre => {
            this.currentView.addGenre(genre, this);
        });
    };

    showSongs(){
        this.removeAllChilds();
        this.currentView = new SongsView(this.panelContainer);
        let songsArr = this.songInfo.getSongs();
        
        songsArr.forEach(song => {
                this.currentView.addSong(song.name, song.artist, song.genre, song.link);
        });
    };

    showAddSongView(){
        this.removeAllChilds();
        this.currentView = new AddSongView(this.panelContainer);
        this.currentView.addMenu(this.songInfo);
    };

    showSongByArtist(artist){
        this.removeAllChilds();
        this.currentview = new SongsView(this.panelContainer);
        let songsArr = this.songInfo.getSongs();

        songsArr.forEach(song => {
            if(song.artist == artist) {
            this.currentview.addSong(song.name, song.artist, song.genre, song.link);
            }
        });
    };

    showSongByGenre(genre){
        this.removeAllChilds();
        this.currentview = new SongsView(this.panelContainer);
        let songsArr = this.songInfo.getSongs();

        songsArr.forEach(song => {
            if(song.genre == genre) {
            this.currentview.addSong(song.name, song.artist, song.genre, song.link);
            }
        });
    };
}

