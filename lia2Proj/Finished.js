'use strict';

window.onload = function() {
    // Hämta alla rader i tabellen
    const rows = document.querySelectorAll("table tbody tr");

    // Gå igenom alla rader och uppdatera månadscellen med ett slumpmässigt månad
    rows.forEach(function(row) {
        const randomMonth = getRandomMonth(); // Hämta ett slumpmässigt månadsnummer
        const monthCell = row.querySelector(".month-column");
        if (monthCell) {
            monthCell.innerText = getMonthName(randomMonth);
        }
    });

    const monthSelect = document.getElementById("month-select");
    if (monthSelect) {
        monthSelect.addEventListener("change", filterTableByMonth);
    }
};

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
    const selectedMonth = document.getElementById("month-select").value;
    const rows = document.querySelectorAll("table tbody tr");

    // Loop igenom alla rader och visa eller dölja baserat på månaden
    rows.forEach(row => {
        const monthCell = row.querySelector(".month-column");
        const rowMonth = monthCell.innerText.trim();

        if (selectedMonth === "") {
            row.style.display = "";
        } else if (selectedMonth !== rowMonth) {
            row.style.display = "none";
        } else {
            row.style.display = "";
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const hoverLinks = document.querySelectorAll(".hover-link");
  
    hoverLinks.forEach(function(link) {
      const popup = link.nextElementSibling; // Hämtar popupen direkt efter länken
      
      link.addEventListener("mouseover", function() {
        popup.style.display = "block";  // Visa popup vid hovring
      });
      
      link.addEventListener("mouseout", function() {
        popup.style.display = "none";  // Dölja popup när hovring tas bort
      });
    });
  });