console.log("hello world");
const sounds = [
    new Audio("assets/hihat.mp3"),
    new Audio("assets/kick.mp3"),
    new Audio("assets/snare.mp3"),
    new Audio("assets/A.mp3"),
    new Audio("assets/C.mp3"),
    new Audio("assets/F.mp3"),
    new Audio("assets/G.mp3"),
    new Audio("assets/laugh-1.mp3"),
    new Audio("assets/laugh-2.mp3")
];
function playSample(sound) {
    sound.play();
}
document.querySelector("#hihat").addEventListener("click", function () { playSample(sounds[0]); });
document.querySelector("#kick").addEventListener("click", function () { playSample(sounds[1]); });
document.querySelector("#snare").addEventListener("click", function () { playSample(sounds[2]); });
document.querySelector("#noteA").addEventListener("click", function () { playSample(sounds[3]); });
document.querySelector("#noteB").addEventListener("click", function () { playSample(sounds[4]); });
document.querySelector("#noteC").addEventListener("click", function () { playSample(sounds[5]); });
document.querySelector("#noteD").addEventListener("click", function () { playSample(sounds[6]); });
document.querySelector("#laughter1").addEventListener("click", function () { playSample(sounds[7]); });
document.querySelector("#laughter2").addEventListener("click", function () { playSample(sounds[8]); });
//# sourceMappingURL=typescript.js.map