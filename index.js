// heutige Datum in der Infobox anzeigen
let today= new Date();
let options = { day: 'numeric', month: 'long' };
let formattedDate = today.toLocaleDateString('de-DE', options);

let text = document.getElementById("todaydate");
if (text) {
    text.textContent = formattedDate;
}

// Wochentag in der Infobox anzeigen

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

// const Feiertage = [
//     { date: "01.01", name: "Neujahr" },
//     { date: "06.01", name: "Heilige Drei Könige" },
//     { date: "01.05", name: "Tag der Arbeit" },
//     { date: "03.10", name: "Tag der Deutschen Einheit" },
//     { date: "25.12", name: "1. Weihnachtstag" },
//     { date: "26.12", name: "2. Weihnachtstag" }
// ];  

// let Vacation = today.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit' });











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