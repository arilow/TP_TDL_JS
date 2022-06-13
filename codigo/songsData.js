import {add, getSongCollection} from './firebase.js'

export class SongsData {
    constructor() {
        this.songs = [];
        this.genres = new Set();
        this.artists = new Set();
        this.getSongsFromDatabase();
    };

    getSongs() {
        return this.songs;
    }

    getArtists() {
        return this.artists;
    }

    getGenres() {
        return this.genres;
    }

    addSong(song, artist, genre, link) {
        this.songs.push({song, artist, genre, link})
        this.genres.add(genre);
        this.artists.add(artist);
        add(song, artist, genre, link)
    }

    getSongsFromDatabase() {
        window.addEventListener('DOMContentLoaded', async () => {
            const querytSnapshot = await getSongCollection();
            querytSnapshot.forEach(doc => {
                this.songs.push(doc.data());
                this.genres.add(doc.data().genre);
                this.artists.add(doc.data().artist);
                console.log(doc.data());
            });
            console.log(this.genres);
            console.log(this.artists);
        });
    };

}
