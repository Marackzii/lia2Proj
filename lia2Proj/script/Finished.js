'use strict';

window.onload = function() {
    // Hämta alla rader i tabellen
    const rows = document.querySelectorAll("table tbody tr");

    // Gå igenom alla rader och uppdatera månadscellen med ett slumpmässigt månad
    rows.forEach(function(row) {
        const randomMonth = getRandomMonth(); // Hämta ett slumpmässigt månadsnummer

        // Hämta månadscellen och sätt dess text till ett slumpmässigt månadsnamn
        const monthCell = row.querySelector(".month-column");
        if (monthCell) {
            monthCell.innerText = getMonthName(randomMonth); // Använd en funktion för att få månadsnamnet
        }
    });
}

// Funktion för att konvertera månadsnummer till månadsnamn
function getMonthName(monthNumber) {
    const months = [
        "Januari", "Februari", "Mars", "April", "Maj", "Juni", 
        "Juli", "Augusti", "September", "Oktober", "November", "December"
    ];
    return months[monthNumber - 1];
}

// Funktion för att generera ett slumpmässigt månadsnummer mellan 1 och 12
function getRandomMonth() {
    return Math.floor(Math.random() * 12) + 1;
}


// Funktion för att filtrera tabellen baserat på vald månad
function filterTableByMonth() {
    // Hämta det valda månadsvärdet från dropdown-menyn
    const selectedMonth = document.getElementById("month-select").value;

    // Hämta alla tabellrader (förutom headern)
    const rows = document.querySelectorAll("table tbody tr");

    // Loop igenom alla rader och visa eller dölja baserat på månaden
    rows.forEach(row => {
        const monthCell = row.querySelector(".month-column");  // Hämta månaden från månadscellen
        const rowMonth = monthCell.innerText.trim();  // Hämta texten i månadscellen och ta bort extra mellanslag

        // Om månad är vald och den matchar månadscellen, visa raden. Annars, dölja den.
        if (selectedMonth && selectedMonth !== rowMonth) {
            row.style.display = "none";  // Dölj raden om den inte matchar vald månad
        } else {
            row.style.display = "";  // Visa raden om den matchar vald månad
        }
    });
}

