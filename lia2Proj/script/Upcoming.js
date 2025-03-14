'use strict';

// Funktion för att skapa en ny flex-container
function addUpcoming() 
{
    // Skapa en ny div för flex-container
    let flexContainer = document.createElement("div");
    flexContainer.classList.add("flex-container3");

    // Skapa en ny div för innehållet i flex-container
    let contentDiv = document.createElement("div");

    // Slumpmässiga detaljer för problemet
    let systemName = "DX49KN0";
    let startTime = "12/3/2025 - 12:00";
    let issue = "Användare X syns inte i systemet";
    let actionInProgress = "Inväntar sysadmin login";
    let expectedResolutionTime = "1-2 veckor";
    let nextUpdate = "Om 1 vecka";
    let contact = "John Doe/johndoe@gmail.com/07xxxxxxxx";

    // Skapa lampan
    let lamp = document.createElement("div");
    lamp.classList.add("lamp3");

    // Lägg till textinnehåll i contentDiv
    contentDiv.innerHTML = `
    <span class="lamp-container3">
      ${lamp.outerHTML}
      <strong>Driftstörning - ${systemName}</strong>
    </span><br>    
    Starttid: ${startTime}<br>
    Problem: ${issue}<br>
    Åtgärd pågår: ${actionInProgress}<br>
    Förväntad lösningstid: ${expectedResolutionTime}<br>
    Nästa uppdatering: ${nextUpdate}<br>
    Kontakt: ${contact}
`;

// Lägg till contentDiv i flexContainer
flexContainer.appendChild(contentDiv);

// Lägg till den nya flexContainer i en specifik container
let upcomingContainer = document.querySelector(".upcoming-container");
upcomingContainer.appendChild(flexContainer);
}

// Lägg till event listener till knappen för att skapa nya containers vid klick
document.querySelector("#createUpcomingBtn").addEventListener("click", addUpcoming);

// Lägg till event listener till knappen
document.querySelector("#createUpcomingBtn").addEventListener("click", addUpcoming);

// FullCalendar-initiering
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            {
                title: 'Möte',
                start: '2025-03-17'
            }
        ]
    });
    calendar.render();
});