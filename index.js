// heutige Datum in der Infobox anzeigen
let today= new Date();
let options = { day: 'numeric', month: 'long' };
let formattedDate = today.toLocaleDateString('de-DE', options);

let text = document.getElementById("todaydate");
if (text) {
    text.textContent = formattedDate;
}

// Wochentag des gesamten Monats in der Infobox anzeigen

let WeekdayDate= today.getDate();
let weekdayText = "";

if (WeekdayDate <= 7) {
    weekdayText = "erste";

} else if (WeekdayDate <= 14) {
    weekdayText = "zweite";

} else if (WeekdayDate <= 21) {
    weekdayText = "dritte";

} else if (WeekdayDate <= 28) {
    weekdayText = "vierte";

} else { 
    weekdayText = "fünfte";


}
document.getElementById("Weekdaynumber").textContent = weekdayText;

// Wochentage in der Infobox anzeigen
let weekday = today.getDay();
let weekdayNames = "";
if (weekday === 0) {
    weekdayNames = "Sonntag";
}
else if (weekday === 1) {
    weekdayNames = "Montag";
}
else if (weekday === 2) {
    weekdayNames = "Dienstag";  
}
else if(weekday===3) {
    weekdayNames="Mittwoch";
}
else if(weekday===4) {
    weekdayNames="Donnerstag";
}       
else if(weekday===5) {
    weekdayNames="Freitag";
}
else if(weekday===6) {
    weekdayNames="Samstag";
}

document.querySelectorAll(".weekday").forEach(el => el.textContent = weekdayNames);


// Monat und Jahr in der Infobox anzeigen
let Month = today.getMonth() 
let Year = today.getFullYear();
let monthNames = "";
if (Month === 0) {
    monthNames = "Januar";
} 
else if (Month === 1) {
    monthNames = "Februar";
}
else if (Month === 2) {
    monthNames = "März";  
}
else if(Month===3) {
    monthNames="April";
}
else if(Month===4) {
    monthNames="Mai";
}
else if(Month===5) {
    monthNames="Juni";
}
else if(Month===6) {
    monthNames="Juli";
}
else if(Month===7) {
    monthNames="August";
}
else if(Month===8) {
    monthNames="September";
}
else if(Month===9) {
    monthNames="Oktober";
}
else if(Month===10) {
    monthNames="November";
}
else if(Month===11) {
    monthNames="Dezember";
}
document.getElementById("MonthYear").textContent = monthNames + " " + Year;

const Feiertage = [
    { date: "01.01.", name: "der Neujahr" },
    { date: "06.01.", name: "der Heilige Drei Könige" },
    { date: "01.05.", name: "der Tag der Arbeit" },
    { date: "03.10.", name: "der Tag der Deutschen Einheit" },
    { date: "25.12.", name: "der 1. Weihnachtstag" },
    { date: "26.07.", name: "der 2. Weihnachtstag" }
];  

let Vacation = today.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit' });
let FeiertageText = Feiertage.find(feiertag => feiertag.date === Vacation);

if (FeiertageText) {
    document.getElementById("holiday").textContent = FeiertageText.name;
}
else (
    document.getElementById("holiday").textContent = "kein Feiertag"
);

// Anzahl der Tage im Monat anzeigen
// Schaltjahrberechnung

let currentYear = today.getFullYear();

function istSchaltjahr(jahr) {
  if (jahr % 400 === 0) return true;
  if (jahr % 100 === 0) return false;
  if (jahr % 4 === 0) return true;
  return false;
}
// Tage im Jahr bis heute berechnen
// Array mit Tagen pro Monat, unter Berücksichtigung von Schaltjahren

 const DaysofMonth  = [31, istSchaltjahr(currentYear) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

 let TageBisJetzt= 0;
 for (let monatIndex= 0; monatIndex < today.getMonth(); monatIndex++)  {
    TageBisJetzt += DaysofMonth[monatIndex];
 }
 TageBisJetzt += today.getDate();



  document.getElementById("DaysOfYear").textContent = TageBisJetzt;

// Tage des Monats anzeigen lassen 

let endeMonat= DaysofMonth[today.getMonth()];
document.getElementById("lastday").textContent = endeMonat;












// const listOfTDElements = document.getElementsByTagName("td")
// const background = document.getElementsByClassName("notesBackground")[0];

// background.addEventListener("click", function() {
//     background.style.display = "none";
// });


// Array.from(listOfTDElements).forEach(element => {
//     element.addEventListener("click", function() {
//         background.style.display = "block";XMLDocument
//     });
// });


// document.createElement("textarea");