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
