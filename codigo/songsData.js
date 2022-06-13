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

    addSong(name, artist, genre, link) {        
        this.songs.push({name, artist, genre, link})
        this.songs.forEach(s => {
            console.log(s);
        });

        this.genres.add(genre);
        this.artists.add(artist);
        add(name, artist, genre, link)
    }

    getSongsFromDatabase() {
        window.addEventListener('DOMContentLoaded', async () => {
            const querytSnapshot = await getSongCollection();
            querytSnapshot.forEach(doc => {
                console.log(doc.data());
                this.songs.push(doc.data());
                this.genres.add(doc.data().genre);
                this.artists.add(doc.data().artist);
            });
        });
    };
}
