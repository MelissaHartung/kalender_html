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
         const dateForCell = currentDate; // <-- Speichere das Datum lokal um beim event.listner das datum zu bekommen
         tablecell.innerText = dateForCell;
      

        if (// Highlight den heutigen Tag
          year === heuteJahr &&
          month === heuteMonat &&
          currentDate === heuteTag
        ) {
          tablecell.classList.add("today");
        }
        
        //datum im infotext ändert sich
        tablecell.addEventListener("click", () => {
          const clickedDate = new Date (year,month,dateForCell);
          const formattedClickedDate =clickedDate.toLocaleDateString ("de-DE", options);
          document.getElementById("todaydate").textContent = formattedClickedDate;


          //Zahl des Wochentages im Monat
          const dayOfMonth = clickedDate.getDate();
          let weekdayText = "";
  if (dayOfMonth <= 7) {
    weekdayText = "erste";
  } else if (dayOfMonth <= 14) {
    weekdayText = "zweite";
  } else if (dayOfMonth <= 21) {
    weekdayText = "dritte";
  } else if (dayOfMonth <= 28) {
    weekdayText = "vierte";
  } else {
    weekdayText = "fünfte";
  }
  document.getElementById("Weekdaynumber").textContent = weekdayText;

  //Wochentag des Tages
    const wochentage = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
  const weekdayName = wochentage[clickedDate.getDay()];
  document.querySelectorAll(".weekday").forEach(el => el.textContent = weekdayName);
    
        });
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
function updateHeadline() {
  let currentDate = new Date(Jahr, Monat);
  let headline = currentDate.toLocaleDateString("de-DE", {
    month: "long",
    year: "numeric",
  });
  document.getElementById("Kopfzeile").textContent =
    "Kalenderblatt " + headline;
}

updateHeadline(); // Überschrift beim ersten Laden setzen

function changeMonth(delta) {
  Monat += delta;
  if (Monat > 11) {
    Monat = 0;
    Jahr++;
  } else if (Monat < 0) {
    Monat = 11;
    Jahr--;
  }
  generateCalendar(Jahr, Monat);
  updateHeadline(); // Überschrift aktualisieren
}
