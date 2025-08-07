//   const weekdayOfFirstOfMonth = new Date(year, month, 1).getDay();
//   const lastDayOfMonth = new Date(year, month + 1, 1 - 1).getDate();
//   const offset = weekdayOfFirstOfMonth - 1;
//   const tablebody = document.getElementById("clickelement");
//   tablebody.innerHTML = "";
//   for (let week = 0; week < 6; week++) {
//     const tablerow = document.createElement("tr");
//     for (let day = 0; day < 7; day++) {
//       const tablecell = document.createElement("td");
//       const currentDate = week * 7 + day + 1 - offset;
//       tablecell.innerText = currentDate;
//       if (week == 0 && day < weekdayOfFirstOfMonth - 1) {
//         tablecell.innerText = "";
//       }
//       if (currentDate > lastDayOfMonth) {
//         tablecell.innerText = "";
//       }
//       tablerow.appendChild(tablecell);
//     }
//     tablebody.appendChild(tablerow);
//   }
// }

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
  // Montag=0 bis Sonntag=6, JavaScript Sonntag=0, deshalb anpassen:
  weekdayOfFirstOfMonth = (weekdayOfFirstOfMonth + 6) % 7;

  const lastDayOfMonth = new Date(year, month + 1, 0).getDate();

  const tablebody = document.getElementById("clickelement");
  tablebody.innerHTML = "";

  let currentDate = 1 - weekdayOfFirstOfMonth;

  for (let week = 0; week < 6; week++) {
    const tablerow = document.createElement("tr");
    for (let day = 0; day < 7; day++) {
      const tablecell = document.createElement("td");

      if (currentDate < 1 || currentDate > lastDayOfMonth) {
        tablecell.innerText = "";
      } else {
        tablecell.innerText = currentDate;

        if (
          year === heuteJahr &&
          month === heuteMonat &&
          currentDate === heuteTag
        ) {
          tablecell.classList.add("today");
        }
      }

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
  generateCalendar(Jahr, Monat);
}

// function generateCalender(year, month) {
//   const firstday = new Date(year, month, 1);
//   let weekdayofFirstOfMonth = firstday.getDay();
//   weekdayOfFirstOfMonth = (weekdayOfFisrtOfMonth + 6) % 7;
//   const lastDayOfMonth = new date(year, month + 1, 0).getDate();
//   const tablebody = document.getElementById("clickelement");

//   tablebody.innerHTML = "";
//   let currentDate = 1 - weekdayOfFirstOfMonth; // 1- der wochentag des ersten, damit dieser dann <1 nicht angezeigt wird

//   for (let week = 0; week < 6; week++) {
//     const tablerow = document.createElement("tr");
//     for (let day = 0; day < 7; day++) {
//       const tablecell = document.createElemnt("td");

//       if (currentDate < 1 || currentDate > lastDayOfMonth) {
//         //ist das currentDate (= Ergebnis von 1- weekdayOfFirstOfMonth)kleiner als 1 und ist CurrentDate größer als der 30/31, dann lass die zeile leer
//         tablecell.innerHTML = "";
//       } else {
//         tablecell.innerText = currentDate;
//       }
//     }
//   }
// }
