/*
let KeyA = document.getElementById("A");
let KeyS = document.getElementById("S");
let KeyD = document.getElementById("D");
let KeyF = document.getElementById("F");
let KeyG = document.getElementById("G");
let KeyH = document.getElementById("H");
let KeyJ = document.getElementById("J");
*/
document.addEventListener("keydown", function(event) {
    if (event.code === "KeyA") {
        let audio = new Audio("music/A.mp3");
        audio.play();
    } else if (event.code === "KeyW") {
        let audio = new Audio("music/W.mp3");
        audio.play();
    } else if (event.code === "KeyS") {
        let audio = new Audio("music/S.mp3");
        audio.play();
    } else if (event.code === "KeyE") {
        let audio = new Audio("music/E.mp3");
        audio.play();
    } else if (event.code === "KeyD") {
        let audio = new Audio("music/D.mp3");
        audio.play();
    } else if (event.code === "KeyF") {
        let audio = new Audio("music/F.mp3");
        audio.play();
    } else if (event.code === "KeyT") {
        let audio = new Audio("music/T.mp3");
        audio.play();
    } else if (event.code === "KeyG") {
        let audio = new Audio("music/G.mp3");
        audio.play();
    } else if (event.code === "KeyY") {
        let audio = new Audio("music/Y.mp3");
        audio.play();
    } else if (event.code === "KeyH") {
        let audio = new Audio("music/H.mp3");
        audio.play();
    } else if (event.code === "KeyU") {
        let audio = new Audio("music/U.mp3");
        audio.play();
    } else if (event.code === "KeyJ") {
        let audio = new Audio("music/J.mp3");
        audio.play();
    } else {
        console.log("Miss Click");
    }
});