import { PanelView } from "./panelView.js";

export class MenuView {

    constructor(panelView) {
        this.panelView = panelView;
        this.songsButton = document.getElementById('cancion');;
        this.artistButton = document.getElementById('artista');
        this.genreButton = document.getElementById('genero');
        this.addSongButton = document.getElementById('agregar');
        
        this.initButtons();
    };

    initButtons() {
        this.songsButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.panelView.showSongs();
        });

        this.artistButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.panelView.showArtists();
        });

        this.genreButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.panelView.showGenres();
        });
 
        this.addSongButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.panelView.showAddSongView();
        });
    }
 
}