window.addEventListener("load", function () {
//console ausgabe
var Deutschland08 = 82.11;
var Deutschland22 = 83.75;
var DeutschlandWR = Deutschland22 - Deutschland08;

var Frankreich08 = 62.14;
var Frankreich22 = 65.48;
var FrankreichWR = Frankreich22 - Frankreich08;

var Italien08 = 59.00;
var Italien22 = 59.53;
var ItalienWR = Italien22 - Italien08;

var Rumänien08 = 20.5;
var Rumänien22 = 19.7;
var RumänienWR = Rumänien22 - Rumänien08;

var EU22 = 750.83;

console.log("Die Einwohnerzahl in Deutschland betrug im Jahr 2008 " +Deutschland08+ " Millionen und stieg 2022 auf " +Deutschland22+ " Millionen an.");
console.log("Die Einwohnerzahl in Frankreich betrug im Jahr 2008 " +Frankreich08+ " Millionen und stieg 2022 auf " +Frankreich22+ " Millionen an.");
console.log("Die Einwohnerzahl in Italien betrug im Jahr 2008 " +Italien08+ " Millionen und stieg 2022 auf " +Italien22+ " Millionen an.");
console.log("Die Einwohnerzahl in Rumänien betrug im Jahr 2008 " +Rumänien08+ " Millionen und sank 2022 auf " +Rumänien22+ " Millionen.");

var Deutschland0822 = (Deutschland22 - Deutschland08) / Deutschland08 * 100;
console.log("Die Einwohnerzahl stieg um " + Deutschland0822.toFixed(2) + " % in Deutschland");

var Frankreich0822 = (Frankreich22 - Frankreich08) / Frankreich08 * 100;
console.log("Die Einwohnerzahl stieg um " + Frankreich0822.toFixed(2) + " % in Frankreich");

var Italien0822 = (Italien22 - Italien08) / Italien08 * 100;
console.log("Die Einwohnerzahl stieg um " + Italien0822.toFixed(2) + " % in Italien");

var Rumänien0822 = (Rumänien22 - Rumänien08) / Rumänien08 * 100;
console.log("Die Einwohnerzahl sank um " + Rumänien0822.toFixed(2) + " % in Rumänien");

var DeutschlandEU = (Deutschland22 / EU22) * 100;
console.log("Realtiv zur EU hat Deutschland " + DeutschlandEU.toFixed(2) + " % Einwohner");

var FrankreichEU = (Frankreich22 / EU22) * 100;
console.log("Realtiv zur EU hat Frankreich " + FrankreichEU.toFixed(2) + " % Einwohner");

var ItalienEU = (Italien22 / EU22) * 100;
console.log("Realtiv zur EU hat Italien " + ItalienEU.toFixed(2) + " % Einwohner");

var RumänienEU = (Rumänien22 / EU22) * 100;
console.log("Realtiv zur EU hat Rumänien " + RumänienEU.toFixed(2) + " % Einwohner");

//html ausgabe 
function germany() {
    document.querySelector("#einwohnerzahl").innerHTML=String(Deutschland22) + " Mio.";
    document.querySelector("#RzurEU").innerHTML=String(DeutschlandEU.toFixed(2)) + " %.";
    document.querySelector("#wachstumsrate").innerHTML=String(Deutschland0822.toFixed(2)) + " %.";
    document.querySelector("#wachstumszahl").innerHTML=String(DeutschlandWR.toFixed(2)) + " Mio.";
    document.querySelector("span").innerHTML = "Deutschland";
}
document.querySelector(".germany").addEventListener('click', germany);

function france() {
    document.querySelector("#einwohnerzahl").innerHTML=String(Frankreich22) + " Mio.";
    document.querySelector("#RzurEU").innerHTML=String(FrankreichEU.toFixed(2)) + " %.";
    document.querySelector("#wachstumsrate").innerHTML=String(Frankreich0822.toFixed(2)) + " %.";
    document.querySelector("#wachstumszahl").innerHTML=String(FrankreichWR.toFixed(2)) + " Mio.";
    document.querySelector("span").innerHTML = "Frankreich";
}
document.querySelector(".france").addEventListener('click', france);

function italy() {
    document.querySelector("#einwohnerzahl").innerHTML=String(Italien22) + " Mio.";
    document.querySelector("#RzurEU").innerHTML=String(ItalienEU.toFixed(2)) + " %.";
    document.querySelector("#wachstumsrate").innerHTML=String(Italien0822.toFixed(2)) + " %.";
    document.querySelector("#wachstumszahl").innerHTML=String(ItalienWR.toFixed(2)) + " Mio.";
    document.querySelector("span").innerHTML = "Italien";
}
document.querySelector(".italy").addEventListener('click', italy);

function romania() {
    document.querySelector("#einwohnerzahl").innerHTML=String(Rumänien22) + " Mio.";
    document.querySelector("#RzurEU").innerHTML=String(RumänienEU.toFixed(2)) + " %.";
    document.querySelector("#wachstumsrate").innerHTML=String(Rumänien0822.toFixed(2)) + " %.";
    document.querySelector("#wachstumszahl").innerHTML=String(RumänienWR.toFixed(2)) + " Mio.";
    document.querySelector("span").innerHTML = "Rumänien";
}
document.querySelector(".romania").addEventListener('click', romania);

});