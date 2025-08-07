let Jahr = new Date().getFullYear();
let Monat = new Date().getMonth();
const heute = new Date();
const heuteJahr = heute.getFullYear();
const heuteMonat = heute.getMonth();
const heuteTag = heute.getDate();

generateCalendar(Year, Month);

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
        tablecell.innerText = currentDate;

        //weitere Bedingung um den heutigen Tag zu suchen und zu markieren
        if (
          year === heuteJahr &&
          month === heuteMonat &&
          currentDate === heuteTag
        ) {
          tablecell.classList.add("today");
        }
      }

      //Tablle ihre Kinderelemente zufügen
      tablerow.appendChild(tablecell);
      currentDate++;
    }
    tablebody.appendChild(tablerow);
  }
}

function changeMonth(delta) {
  Monat += delta;
  if (Monat > 11) {
    Monat = 0;
    Jahr++;
  } else if (Monat < 0) {
    Monat = 11;
    Jahr--;
  }
  generateCalendar(Jahr, Monat); // Aufruf der func. damit der kalender beim vor/zurück neu lädt, damit er unbegrenzt benutzbar ist
}
