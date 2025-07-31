// heutige Datum in der Infobox anzeigen
let today = new Date();
let options = { day: "numeric", month: "long" };
let formattedDate = today.toLocaleDateString("de-DE", options);

let text = document.getElementById("todaydate");
if (text) {
  text.textContent = formattedDate;
}

// Überschrift des Kalenders dynamisch setzen
let Headline = today.toLocaleDateString("de-DE", {
  month: "long",
  year: "numeric",
});
document.getElementById("Kopfzeile").textContent = "Kalenderblatt " + Headline;

// Wochentag des gesamten Monats in der Infobox anzeigen

let WeekdayDate = today.getDate();
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
} else if (weekday === 1) {
  weekdayNames = "Montag";
} else if (weekday === 2) {
  weekdayNames = "Dienstag";
} else if (weekday === 3) {
  weekdayNames = "Mittwoch";
} else if (weekday === 4) {
  weekdayNames = "Donnerstag";
} else if (weekday === 5) {
  weekdayNames = "Freitag";
} else if (weekday === 6) {
  weekdayNames = "Samstag";
}

document
  .querySelectorAll(".weekday")
  .forEach((el) => (el.textContent = weekdayNames));

// Monat und Jahr in der Infobox anzeigen
let Month = today.getMonth();
let Year = today.getFullYear();
let monthNames = "";
if (Month === 0) {
  monthNames = "Januar";
} else if (Month === 1) {
  monthNames = "Februar";
} else if (Month === 2) {
  monthNames = "März";
} else if (Month === 3) {
  monthNames = "April";
} else if (Month === 4) {
  monthNames = "Mai";
} else if (Month === 5) {
  monthNames = "Juni";
} else if (Month === 6) {
  monthNames = "Juli";
} else if (Month === 7) {
  monthNames = "August";
} else if (Month === 8) {
  monthNames = "September";
} else if (Month === 9) {
  monthNames = "Oktober";
} else if (Month === 10) {
  monthNames = "November";
} else if (Month === 11) {
  monthNames = "Dezember";
}
document.getElementById("MonthYear").textContent = monthNames + " " + Year;

// Feiertage in der Infobox anzeigen
// Array mit Feiertagen
const Feiertage = [
  { date: "01.01.", name: "der Neujahr" },
  { date: "06.01.", name: "der Heilige Drei Könige" },
  { date: "01.05.", name: "der Tag der Arbeit" },
  { date: "03.10.", name: "der Tag der Deutschen Einheit" },
  { date: "25.12.", name: "der 1. Weihnachtstag" },
  { date: "26.07.", name: "der 2. Weihnachtstag" },
];
let currentYear = today.getFullYear();

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
let ostern = getOstersonntag(currentYear);
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
Feiertage.push(
  { date: osternStr, name: " Ostersonntag" },
  { date: gründonnerstagStr, name: "Gründonnerstag" },
  { date: karfreitagStr, name: "Karfreitag" },
  { date: ostermontagStr, name: "Ostermontag" },
  { date: christiHimmelfahrtStr, name: "Christi Himmelfahrt" },
  { date: pfingstsonntagStr, name: "Pfingstsonntag" },
  { date: pfingstmontagStr, name: "Pfingstmontag" },
  { date: frohnleichnamStr, name: "Fronleichnam" }
); // Ostersonntag hinzufügen im Feiertage-Array

let Vacation = today.toLocaleDateString("de-DE", {
  day: "2-digit",
  month: "2-digit",
});
let FeiertageText = Feiertage.find((feiertag) => feiertag.date === Vacation);

if (FeiertageText) {
  document.getElementById("holiday").textContent = FeiertageText.name;
} else document.getElementById("holiday").textContent = "kein Feiertag";

// Anzahl der Tage im Monat anzeigen
// Schaltjahrberechnung

function istSchaltjahr(jahr) {
  if (jahr % 400 === 0) return true;
  if (jahr % 100 === 0) return false;
  if (jahr % 4 === 0) return true;
  return false;
}
// Tage im Jahr bis heute berechnen
// Array mit Tagen pro Monat, unter Berücksichtigung von Schaltjahren

const DaysofMonth = [
  31,
  istSchaltjahr(currentYear) ? 29 : 28,
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

let TageBisJetzt = 0; //speichert die gesamtanzahl an tagen der vorherigen Monate
for (let monatIndex = 0; monatIndex < today.getMonth(); monatIndex++) {
  //Zählerschleife die bei 0 beginnt und solange zählt bis monatIndex kleiner als der aktuelle Monat ist also 5 Juni
  TageBisJetzt = TageBisJetzt + DaysofMonth[monatIndex]; //Nun wird die Anzahl der Tage des Monats zu der Gesamtanzahl der Tage addiert bis juni
}
TageBisJetzt += today.getDate(); // und die Anzahl der Tage des aktuellen Monats wird hinzugefügt

document.getElementById("DaysOfYear").textContent = TageBisJetzt;

// Tage des Monats anzeigen lassen

let endeMonat = DaysofMonth[today.getMonth()];
document.getElementById("lastday").textContent = endeMonat;

// Titel der Seite dynamisch setzen
document.title = "Kalender - " + monthNames + " " + Year;

document.getElementById("MonthinHeadline").textContent =
  "Kalender " + monthNames + " " + Year;
