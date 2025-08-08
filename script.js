// Calendar generation variables
const heute = new Date();
const heuteJahr = heute.getFullYear();
const heuteMonat = heute.getMonth();
const heuteTag = heute.getDate();
const options = { day: "numeric", month: "long" };
let heuteAsFormattedDate = heute.toLocaleDateString("de-DE", options);
let selectedMonth = heute.getMonth();
let selectedYear = heute.getFullYear();
 
// Tage im Jahr bis heute berechnen
// Array mit Tagen pro Monat, unter Berücksichtigung von Schaltjahren
const daysOfMonth = [
  31,
  istSchaltjahr(selectedYear) ? 29 : 28,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31,
];
 
//Wochentag des Tages
const wochentage = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];
// Feiertage in der Infobox anzeigen
// Array mit Feiertagen
const feiertage = [
  { date: "01.01.", name: "der Neujahr" },
  { date: "06.01.", name: "der Heilige Drei Könige" },
  { date: "01.05.", name: "der Tag der Arbeit" },
  { date: "03.10.", name: "der Tag der Deutschen Einheit" },
  { date: "24.12.", name: "der Heiligabend" },
  { date: "25.12.", name: "der 1. Weihnachtstag" },
  { date: "26.12.", name: "der 2. Weihnachtstag" },
];
 
// ✅ Funktion zur Berechnung des Ostersonntags
function getOstersonntag(jahr) {
  const a = jahr % 19;
  const b = Math.floor(jahr / 100);
  const c = jahr % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const monat = Math.floor((h + l - 7 * m + 114) / 31);
  const tag = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(jahr, monat - 1, tag);
}
// Aktuelles Jahr verwenden, um Ostersonntag zu berechnen
let ostern = getOstersonntag(selectedYear);
let osternStr = ostern.toLocaleDateString("de-DE", {
  day: "2-digit",
  month: "2-digit",
});
 
// Funktion zum Formatieren des Datums
function formatDate(date) {
  return date.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
  });
}
 
// Feiertage rund um Ostern berechnen
 
let gründonnerstag = new Date(ostern);
gründonnerstag.setDate(gründonnerstag.getDate() - 3);
 
let Karsamstag = new Date(ostern);
Karsamstag.setDate(Karsamstag.getDate() - 1);
 
let Karfreitag = new Date(ostern);
Karfreitag.setDate(Karfreitag.getDate() - 2);
 
let Ostermontag = new Date(ostern);
Ostermontag.setDate(Ostermontag.getDate() + 1);
 
let christiHimmelfahrt = new Date(ostern);
christiHimmelfahrt.setDate(christiHimmelfahrt.getDate() + 39);
 
let Pfingstsonntag = new Date(ostern);
Pfingstsonntag.setDate(Pfingstsonntag.getDate() + 49);
 
let Pfingstmontag = new Date(ostern);
Pfingstmontag.setDate(Pfingstmontag.getDate() + 50);
 
let Frohnleichnam = new Date(ostern);
Frohnleichnam.setDate(Frohnleichnam.getDate() + 60);
 
// Feiertage formatieren
let gründonnerstagStr = formatDate(gründonnerstag);
let karfreitagStr = formatDate(Karfreitag);
let ostermontagStr = formatDate(Ostermontag);
let christiHimmelfahrtStr = formatDate(christiHimmelfahrt);
let pfingstsonntagStr = formatDate(Pfingstsonntag);
let pfingstmontagStr = formatDate(Pfingstmontag);
let frohnleichnamStr = formatDate(Frohnleichnam);
 
// Feiertage zum Array hinzufügen
feiertage.push(
  { date: osternStr, name: " Ostersonntag" },
  { date: gründonnerstagStr, name: "Gründonnerstag" },
  { date: karfreitagStr, name: "Karfreitag" },
  { date: ostermontagStr, name: "Ostermontag" },
  { date: christiHimmelfahrtStr, name: "Christi Himmelfahrt" },
  { date: pfingstsonntagStr, name: "Pfingstsonntag" },
  { date: pfingstmontagStr, name: "Pfingstmontag" },
  { date: frohnleichnamStr, name: "Fronleichnam" }
); // Ostersonntag hinzufügen im Feiertage-Array
 
// Wochentage in der Infobox anzeigen
const weekdays = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];
let weekday = heute.getDay();
let weekdayNames = weekdays[weekday];
 
const monthNames = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];
 
function isHoliday(date) {
  date = date.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
  });
  return feiertage.find((feiertag) => feiertag.date === date);
}
// format the nesseary ids and classes to fill the html
//in the function formatSelectedCell
function formatSelectedCell(dateForCell) {
  const clickedDate = new Date(selectedYear, selectedMonth, dateForCell);
  selectedYear = clickedDate.getFullYear();
  selectedMonth = clickedDate.getMonth();
  const formattedClickedDate = clickedDate.toLocaleDateString("de-DE", options);
  document.getElementById("todaydate").textContent = formattedClickedDate;
  document.getElementById("weekdaynumber").textContent =
    getWeekOfDate(clickedDate);
 
  const weekdayName = wochentage[clickedDate.getDay()];
  document
    .querySelectorAll(".weekday")
    .forEach((el) => (el.textContent = weekdayName));
 
  // Feiertagsprüfung
  document.getElementById("holiday").textContent = isHoliday(clickedDate)
    ? isHoliday(clickedDate).name
    : "kein Feiertag";
 
  let tageBisJetzt = 0; //speichert die gesamtanzahl an tagen der vorherigen Monate
  for (let monatIndex = 0; monatIndex < clickedDate.getMonth(); monatIndex++) {
    //Zählerschleife die bei 0 beginnt und solange zählt bis monatIndex kleiner als der aktuelle Monat ist also 5 Juni
    tageBisJetzt = tageBisJetzt + daysOfMonth[monatIndex]; //Nun wird die Anzahl der Tage des Monats zu der Gesamtanzahl der Tage addiert bis juni
  }
  tageBisJetzt += clickedDate.getDate(); // und die Anzahl der Tage des aktuellen Monats wird hinzugefügt
 
  document.getElementById("daysOfYear").textContent = tageBisJetzt;
 
  document.getElementById("monthYear").textContent =
    monthNames[selectedMonth] + " " + selectedYear;
 
  // Tage des Monats anzeigen lassen
  let endeMonat = daysOfMonth[clickedDate.getMonth()];
  document.getElementById("lastday").textContent = endeMonat;
}
formatSelectedCell(heute.getDate());
 
// Wochentag des gesamten Monats in der Infobox anzeigen
function getWeekOfDate(date) {
  console.log("getWeekOfDate is called with " + date);
  let WeekdayDate = date.getDate();
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
  console.log(
    "getWeekOfDate has finished with " +
      date +
      " and will return " +
      weekdayText
  );
  return weekdayText;
}
 
// Anzahl der Tage im Monat anzeigen
// Schaltjahrberechnung
function istSchaltjahr(jahr) {
  if (jahr % 400 === 0) return true;
  if (jahr % 100 === 0) return false;
  if (jahr % 4 === 0) return true;
  return false;
}
 
// Titel der Seite dynamisch setzen
document.title = "Kalender - " + monthNames + " " + selectedYear;
 
document.getElementById("historydate").textContent = heuteAsFormattedDate;
 
// Generate calendar on page load
generateCalendar(selectedYear, heuteMonat);
 
// Calendar generation function
function generateCalendar(year, month) {
  const firstDay = new Date(year, month, 1);
  let weekdayOfFirstOfMonth = firstDay.getDay();
  const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
  // Verrücken der Wochentage damit Kalender mit MO=0 beginnt statt Sonntag
  weekdayOfFirstOfMonth = (weekdayOfFirstOfMonth + 6) % 7;
 
  const tablebody = document.getElementById("clickelement"); //leeren der tabelle
  tablebody.innerHTML = "";
 
  let currentDate = 1 - weekdayOfFirstOfMonth; // Berechnung der Tage die frei bleiben bis zum ersten
 
  //Schleifi erstellt Tabelle
  for (let week = 0; week < 6; week++) {
    const tablerow = document.createElement("tr");
    for (let day = 0; day < 7; day++) {
      const tablecell = document.createElement("td");
      if (currentDate < 1 || currentDate > lastDayOfMonth) {
        // Bedingung wann Zellen leer bleiben
        tablecell.innerText = "";
      } else {
        const dateForCell = currentDate; // <-- Speichere das Datum lokal um beim event.listner das datum zu bekommen
        tablecell.innerText = dateForCell;
        if (
          // Highlight den heutigen Tag
          year === heuteJahr &&
          month === heuteMonat &&
          currentDate === heuteTag
        ) {
          tablecell.classList.add("today");
        }
 
        //datum im infotext ändert sich
        tablecell.addEventListener("click", () =>
          formatSelectedCell(dateForCell)
        );
      }
      //Tablle ihre Kinderelemente zufügen
      tablerow.appendChild(tablecell);
      currentDate++;
    }
    tablebody.appendChild(tablerow);
  }
}
 
function changeMonth(delta) {
  selectedMonth += delta;
  if (selectedMonth > 11) {
    selectedMonth = 0;
    selectedYear++;
  } else if (selectedMonth < 0) {
    selectedMonth = 11;
    selectedYear--;
  }
  generateCalendar(selectedYear, selectedMonth);
  updateHeadline();
}
 
function updateHeadline() {
  let currentDate = new Date(selectedYear, selectedMonth);
  let headline = currentDate.toLocaleDateString("de-DE", {
    month: "long",
    year: "numeric",
  });
  document.getElementById("Kopfzeile").textContent =
    "Kalenderblatt " + headline;
}
 
// Initialize headline
updateHeadline();
 
// Event-Listener für das Klicken auf das Element mit der ID "clickelement"
// document.getElementById("clickelement").addEventListener("click", (event) => {
//   const textareaBox = document.getElementById("notiz");
//   textareaBox.classList.toggle("hidden");
// });
 
 