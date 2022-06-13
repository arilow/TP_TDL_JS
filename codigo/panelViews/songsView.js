export class SongsView {
    constructor(songsContainer) {
        this.songsContainer = songsContainer;
        this.documentFragment = document.createDocumentFragment();
    }

    createSongDescription(name, artist, genre) {
        name = `<h2>${name}</h2>`;
        artist = `<h3>${artist}</h3>`;
        genre = `<p><b>${genre}</b></p>`;
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

}