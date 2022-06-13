export class GenresView {
    constructor(panelContainer) {
        this.panelContainer = panelContainer;

        this.genresContainer = document.createElement("DIV");
        this.genresContainer.classList.add(`songs-container`);

        this.documentFragment = document.createDocumentFragment();
    }

    addGenre(genre, panel) {
        let genreDiv = document.createElement("DIV");
        let genreDescription = this.createGenreDescription(genre);
        genreDiv.classList.add(`flex-item`); //Agregue
        genreDiv.innerHTML = genreDescription;

        genreDiv.addEventListener('click', ()=> {
            panel.showSongByGenre(genre);
        });
        
        this.genresContainer.appendChild(genreDiv);
        this.documentFragment.appendChild(this.genresContainer);
        this.panelContainer.appendChild(this.documentFragment);
    };

    createGenreDescription(genre) {
        genre = `<h3>${genre}</h3>`;
        return genre;
    };

};
