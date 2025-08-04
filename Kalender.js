function getCustomDayIndex(date) {
  const day = date.getDay(); // JS: So=0, Mo=1, Di=2, ...
  return (day + 6) % 7; // verschiebt so, dass Mo=0, Di=1, ..., So=6
}
// Wochentage
let shiftedWeekday = getCustomDayIndex(today);
let daysFromMonday = "";
if (shiftedWeekday === 0) {
  daysFromMonday = "Montag";
} else if (shiftedWeekday === 1) {
  daysFromMonday = "Dienstag";
} else if (shiftedWeekday === 2) {
  daysFromMonday = "Mittwoch";
} else if (shiftedWeekday === 3) {
  daysFromMonday = "Donnerstag";
} else if (shiftedWeekday === 4) {
  daysFromMonday = "Freitag";
} else if (shiftedWeekday === 5) {
  daysFromMonday = "Samstag";
} else if (shiftedWeekday === 6) {
  daysFromMonday = "Sonntag";
}

function generateCalendar(year, month) {
  const weekdayOfFirstOfMonth = new Date(year, month, 1).getDay();
  const lastDayOfMonth = new Date(year, month + 1, 1 - 1).getDate();
  const offset = weekdayOfFirstOfMonth - 1;
  console.log(lastDayOfMonth);

  const tablebody = document.getElementById("clickelement");
  for (let week = 0; week < 6; week++) {
    const tablerow = document.createElement("tr");
    for (let day = 0; day < 7; day++) {
      const tablecell = document.createElement("td");
      const currentDate = week * 7 + day + 1 - offset;
      tablecell.innerText = currentDate;
      if (week == 0 && day < weekdayOfFirstOfMonth - 1) {
        tablecell.innerText = "";
      }
      if (currentDate > lastDayOfMonth) {
        tablecell.innerText = "";
      }
      tablerow.appendChild(tablecell);
    }
    tablebody.appendChild(tablerow);
  }
}

generateCalendar(2025, 7);
