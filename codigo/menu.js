import { MenuView } from './menuView.js';
import { PanelView } from "./panelView.js";

let panelView = new PanelView();
let menu = new MenuView(panelView);

window.addEventListener("dataBaseLoaded", ()=>{
    panelView.showSongs();
})

function imprimirInformacion() {
    let song = panelView;
    console.log(song.songInfo.songs);
}

imprimirInformacion();