export class ArtistsView {
    constructor(panelContainer) {
        this.panelContainer = panelContainer;

        this.artistsContainer = document.createElement("DIV");
        this.artistsContainer.classList.add(`songs-container`);

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
        
        this.artistsContainer.appendChild(artistDiv);
        this.documentFragment.appendChild(this.artistsContainer);
        this.panelContainer.appendChild(this.documentFragment);
    };

    createArtistDescription(artist) {
        artist = `<h3>${artist}</h3>`;
        return artist;
    };

}