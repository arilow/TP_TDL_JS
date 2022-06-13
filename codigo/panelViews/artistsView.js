export class ArtistsView {
    constructor(songsContainer) {
        this.songsContainer = songsContainer;
        this.documentFragment = document.createDocumentFragment();
    }

    addArtist(artist, panel) {
        let artistDiv = document.createElement("DIV");
        let artistDescription = this.createArtistDescription(artist);
        artistDiv.classList.add(`flex-item`); //Agregue
        artistDiv.innerHTML = artistDescription;

        artistDiv.addEventListener('click', ()=> {
            panel.showSongByArtist(artist);
        });
        
        this.documentFragment.appendChild(artistDiv);
        this.songsContainer.appendChild(this.documentFragment);
    };

    createArtistDescription(artist) {
        artist = `<h3>${artist}</h3>`;
        return artist;
    };

}