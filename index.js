function add (num1, num2, num3 = 0) {
    const ergebnis = num1 + num2 + num3;
    alert('das ergebnis ist ' + ergebnis)
}

// add(1, 1, 1);
// add(1, 2, 3);

 

const listOfTDElements = document.getElementsByTagName("td")
const background = document.getElementsByClassName("notesBackground")[0];

background.addEventListener("click", function() {
    background.style.display = "none";
});


Array.from(listOfTDElements).forEach(element => {
    element.addEventListener("click", function() {
        background.style.display = "block";XMLDocument
    });
});


document.createElement("textarea");