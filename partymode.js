function partyMode() {
    var party = document.querySelector(".default");
        party.classList.toggle("party");

    var tekst = document.querySelector(".tekstDefault");
        tekst.classList.toggle("tekst");

    document.getElementById("bd").style.backgroundImage = "none";
    document.getElementById("bd").style.backgroundRepeat = "no-repeat";
    
    document.getElementById("bd").style.background = "rgb(37 ,37 ,37)";
    
}

function seizure() {
    alert("Do not use if prone to seizures");
}
