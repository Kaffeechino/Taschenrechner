//VARIABLEN AUS HTML
let eingabe = document.getElementById("unterezeile")
let ausgabe = document.getElementById("oberezeile")
let clear = document.getElementById("leeren")
let equals = document.getElementById("gleich")
let ans = document.getElementById("data-ans")
let deletelast = document.getElementById("data-deletelast")
eingabe.innerText = ""
ausgabe.innerText = ""

//Zusammenfassen aller Rechenopertaionen zum Array "rechenoperationen"
var rechenoperationen = document.querySelectorAll(".rechenoperation");
//Zusammenfassen aller Numberbuttons zum Array "numberbuttons"
var numberbuttons = document.querySelectorAll(".number");
var x;

for (x of numberbuttons) {
    eventfunction(x);
}
for (x of rechenoperationen) {
    eventfunction(x);
}
//Eventlistenerfunktion für Buttons
function eventfunction (p) {
    p.addEventListener('click', function() {
        addzeichen(p)
})
}

//Eventlistener für Funktionen
ans.addEventListener('click', function() {
    answer()
})
deletelast.addEventListener('click', function() {
    eingabe.innerText = eingabe.innerText.slice(0, -1)
})
//EVENTLISTENER FÜR GLEICH
equals.addEventListener('click', function() {
    ausgabe.innerText = eval(eingabe.innerText)
})
//CLEAR
clear.addEventListener('click', function() {
    clearAll()
})



//FUNKTIONEN DES TASCHENRECHNERS
function addzeichen(p1) {
    eingabe.innerText = eingabe.innerText + p1.innerText
}  
function clearAll() {
    eingabe.innerText = ""
    ausgabe.innerText = ""
}
function answer () {
    eingabe.innerText = ausgabe.innerText
    ausgabe.innerText = ""
}