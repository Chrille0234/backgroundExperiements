function partyMode() {
    var party = document.querySelector(".default");
        party.classList.toggle("party");

    var tekst = document.querySelector(".tekstDefault");
        tekst.classList.toggle("tekst");

    var myAudio = document.getElementById("myAudio");
        return myAudio.paused ? myAudio.play() : myAudio.pause();
}

function seizure() {
    alert("Do not use if prone to seizures");
}
