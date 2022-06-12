import { SongView } from "./songClass.js";

export class MenuView {

    constructor(all, artist, genre, add) {
        this.visual = new SongView();
        this.songsButton = all;
        this.artistButton = artist;
        this.genreButton = genre;
        this.addSongButton = add;
    };

    touchButtonAll() {
        this.songsButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.visual.showSong();
        });
    };

    touchButtonArtists() {
        this.artistButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.visual.showArtists();
        });
    };

    touchButtonGenres() {
        this.genreButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.visual.showGenres();
        });
    };

    touchButtonAddSong() {
        this.addSongButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.visual.showAddSongView();
        });
    };
}