var A09;
(function (A09) {
    console.log("hello world");
    const sound = [
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
    //Pad Klick-Event
    document.querySelector("#hihat").addEventListener("click", function () { playSample(sound[0]); });
    document.querySelector("#kick").addEventListener("click", function () { playSample(sound[1]); });
    document.querySelector("#snare").addEventListener("click", function () { playSample(sound[2]); });
    document.querySelector("#A").addEventListener("click", function () { playSample(sound[3]); });
    document.querySelector("#C").addEventListener("click", function () { playSample(sound[4]); });
    document.querySelector("#F").addEventListener("click", function () { playSample(sound[5]); });
    document.querySelector("#G").addEventListener("click", function () { playSample(sound[6]); });
    document.querySelector("#laugh-1").addEventListener("click", function () { playSample(sound[7]); });
    document.querySelector("#laugh-2").addEventListener("click", function () { playSample(sound[8]); });
    // Klick-Event Buttons
    document.querySelector("#play").addEventListener("click", function () { playBeat(); });
    document.querySelector("#remix").addEventListener("click", function () { playRemix(); });
    //function playBeat() {
    //    setInterval(function () {
    //        for (let counter = 0; counter < sounds.length; counter++) {
    //            sounds[counter].play();
    //        }
    //    }, 500);
    //}
    //document.querySelector("#playbutton").addEventListener("click", function () { playBeat(); });
    var myInterval;
    var index = 0;
    var playback;
    function playBeat() {
        if (document.querySelector("#play").getAttribute("class") == "fas fa-play") {
            document.querySelector("#play").setAttribute("class", "fas fa-pause");
            myInterval = setInterval(beat, 500);
        }
        else {
            document.querySelector("#play").setAttribute("class", "fas fa-play");
            clearInterval(myInterval);
        }
        function beat() {
            playSample(sound[index]);
            index++;
            if (index == 3) {
                index = 0;
            }
        }
    }
    function playRemix() {
        myInterval = setInterval(remix, 500);
        function remix() {
            index = Math.floor(Math.random() * 5);
            playSample(sound[index]);
        }
        playback = true;
        if (playback == true) {
            document.querySelector("#play").setAttribute("class", "fas fa-pause");
        }
        else {
            document.querySelector("#play").setAttribute("class", "fas fa-play");
            clearInterval(myInterval);
        }
    }
})(A09 || (A09 = {}));
//# sourceMappingURL=typescript.js.map