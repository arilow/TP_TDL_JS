import { PanelView } from "./panelView.js";

export class MenuView {

    constructor(songView) {
        this.songView = songView;
        this.songsButton = document.getElementById('cancion');;
        this.artistButton = document.getElementById('artista');
        this.genreButton = document.getElementById('genero');
        this.addSongButton = document.getElementById('agregar');
        
        this.initButtons();
    };

    initButtons() {
        this.songsButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.songView.showSongs();
        });

        this.artistButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.songView.showArtists();
        });

        this.genreButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.songView.showGenres();
        });
 
        this.addSongButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.songView.showAddSongView();
        });
    }
 
}