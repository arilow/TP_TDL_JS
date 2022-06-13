export class GenresView {
    constructor(songsContainer) {
        this.songsContainer = songsContainer;
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
        
        this.documentFragment.appendChild(genreDiv);
        this.songsContainer.appendChild(this.documentFragment);
    };

    createGenreDescription(genre) {
        genre = `<h3>${genre}</h3>`;
        return genre;
    };

};
