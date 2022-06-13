export class AddSongView {
    constructor(songsContainer) {
        this.songsContainer = songsContainer;
        this.documentFragment = document.createDocumentFragment();
    }

    createMenuToLoadDatabase() {
        let menu = `<form id="form">`+
        `<input class="inputdata" type="text" id="txtSong">`+
        `<input class="inputdata" type="text" id="txtArtist">`+
        `<input class="inputdata" type="text" id="txtGenre">`+
        `<input class="inputdata" type="text" id="txtLink">`+
        `<button class="inputdata" id="btnSend">Enviar</button>`+
        `</form>`;
        return menu;
    };

    addMenu(songInfo) {
        let menuDiv = document.createElement("DIV");
        let menuDescription = this.createMenuToLoadDatabase();
        menuDiv.innerHTML = menuDescription;
        this.documentFragment.appendChild(menuDiv);
        this.songsContainer.appendChild(this.documentFragment);
        let button = document.getElementById('btnSend');
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const form = document.getElementById('form');
            const txtSong = document.getElementById('txtSong');
            const txtArtist = document.getElementById('txtArtist');
            const txtGenre = document.getElementById('txtGenre');
            const txtLink = document.getElementById('txtLink');

            songInfo.addSong(txtSong.value, txtArtist.value, txtGenre.value, txtLink.value)
            form.reset();
        });
    };


};