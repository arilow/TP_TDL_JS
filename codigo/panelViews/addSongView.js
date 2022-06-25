export class AddSongView {
    constructor(panelContainer) {
        this.panelContainer = panelContainer;

        this.titlesDiv = document.createElement("DIV");
        this.titlesDiv.classList.add(`add-song`);

        this.inputDiv = document.createElement("DIV");
        this.inputDiv.classList.add(`add-song`);

        this.documentFragment = document.createDocumentFragment();
    }

    createMenuTitles() {
        let menu = `<form class="form">`+
        `<h2 class="titlesdata"> Nombre </h2>`+
        `<h2 class="titlesdata"> Artista </h2>`+
        `<h2 class="titlesdata"> Género </h2>`+
        `<h2 class="titlesdata"> Link </h2>`+
        `</form>`;
        return menu;
    };

    createMenuToLoadDatabase() {
        let menu = `<form class="form" id="input-form">`+
        `<input class="inputdata" type="text" id="txtSong">`+
        `<input class="inputdata" type="text" id="txtArtist">`+
        `<input class="inputdata" type="text" id="txtGenre">`+
        `<input class="inputdata" type="text" id="txtLink">`+
        `<button class="inputdata" id="btnSend">Enviar</button>`+
        `</form>`;
        return menu;
    };

    addMenu(songInfo) {
        this.titlesDiv.innerHTML = this.createMenuTitles();

        let menuDescription = this.createMenuToLoadDatabase();
        this.inputDiv.innerHTML = menuDescription;

        this.documentFragment.appendChild(this.titlesDiv);
        this.documentFragment.appendChild(this.inputDiv);

        this.panelContainer.appendChild(this.documentFragment);
        let button = document.getElementById('btnSend');
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const form = document.getElementById('input-form');
            const txtSong = document.getElementById('txtSong');
            const txtArtist = document.getElementById('txtArtist');
            const txtGenre = document.getElementById('txtGenre');
            const txtLink = document.getElementById('txtLink');

            try {
                songInfo.addSong(txtSong.value, txtArtist.value, txtGenre.value, txtLink.value)
                form.reset();                    
            } catch (error) {
                alert(error.msg);
            }
        });
    };


};