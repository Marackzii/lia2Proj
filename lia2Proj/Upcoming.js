'use strict';

// Funktion för att skapa en ny flex-container
function addUpcoming() {
    // Skapa en ny div för flex-container
    let flexContainer = document.createElement("div");
    flexContainer.classList.add("flex-container3");

    // Skapa en ny div för innehållet i flex-container
    let contentDiv = document.createElement("div");

    // Slumpmässiga detaljer för problemet
    let systemName = "XXXXX";
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
        <button class="editBtn">Redigera</button>
    </span><br>    
    <span class="starttid">Starttid: ${startTime}</span><br>
    <span class="problem">Problem: ${issue}</span><br>
    <span class="atgard">Åtgärd pågår: ${actionInProgress}</span><br>
    <span class="losningstid">Förväntad lösningstid: ${expectedResolutionTime}</span><br>
    <span class="uppdatering">Nästa uppdatering: ${nextUpdate}</span><br>
    <span class="kontakt">Kontakt: ${contact}</span>
    `;

    // Lägg till contentDiv i flexContainer
    flexContainer.appendChild(contentDiv);

    contentDiv.querySelector(".editBtn").addEventListener("click", function (event) {
    showEditForm(event, contentDiv);
    });

    // Lägg till den nya flexContainer i en specifik container
    let upcomingContainer = document.querySelector(".upcoming-container");
    upcomingContainer.appendChild(flexContainer);
}

document.addEventListener("DOMContentLoaded", function () {
    // Lägg till event listener till alla existerande redigeringsknappar
    document.querySelectorAll('.editBtn').forEach(button => {
        button.addEventListener('click', function (event) {
            const flexWrapper = event.target.closest('.flex-container3 > div');
            if (flexWrapper) {
                showEditForm(event, flexWrapper);
            }
        });
    });
});

// Funktion för att visa redigeringsformuläret
function showEditForm(event, flexWrapper) {
    const title = flexWrapper.querySelector('strong').textContent.replace(/.* - /, '');
    const starttid = flexWrapper.querySelector('.starttid').textContent.replace('Starttid: ', '');
    const problem = flexWrapper.querySelector('.problem').textContent.replace('Problem: ', '');
    const atgard = flexWrapper.querySelector('.atgard').textContent.replace('Åtgärd pågår: ', '');
    const losningstid = flexWrapper.querySelector('.losningstid').textContent.replace('Förväntad lösningstid: ', '');
    const uppdatering = flexWrapper.querySelector('.uppdatering').textContent.replace('Nästa uppdatering: ', '');
    const kontakt = flexWrapper.querySelector('.kontakt').textContent.replace('Kontakt: ', '');

    const editBtn = event.target;
    editBtn.disabled = true;

    flexWrapper.querySelector('strong').innerHTML = `Driftstörning - <input type="text" value="${title}" class="edit-input">`;
    flexWrapper.querySelector('.starttid').innerHTML = `Starttid: <input type="text" value="${starttid}" class="edit-input">`;
    flexWrapper.querySelector('.problem').innerHTML = `Problem: <input type="text" value="${problem}" class="edit-input">`;
    flexWrapper.querySelector('.atgard').innerHTML = `Åtgärd pågår: <input type="text" value="${atgard}" class="edit-input">`;
    flexWrapper.querySelector('.losningstid').innerHTML = `Förväntad lösningstid: <input type="text" value="${losningstid}" class="edit-input">`;
    flexWrapper.querySelector('.uppdatering').innerHTML = `Nästa uppdatering: <input type="text" value="${uppdatering}" class="edit-input">`;
    flexWrapper.querySelector('.kontakt').innerHTML = `Kontakt: <input type="text" value="${kontakt}" class="edit-input">`;

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Spara";
    saveBtn.classList.add("saveBtn");

    // Lägg till saveBtn direkt efter kontaktfältet
    const kontaktField = flexWrapper.querySelector('.kontakt');
    kontaktField.parentNode.insertBefore(saveBtn, kontaktField.nextSibling);

    saveBtn.addEventListener("click", function () {
        const newTitle = flexWrapper.querySelector('strong input').value;
        const newStarttid = flexWrapper.querySelector('.starttid input').value;
        const newProblem = flexWrapper.querySelector('.problem input').value;
        const newAtgard = flexWrapper.querySelector('.atgard input').value;
        const newLosningstid = flexWrapper.querySelector('.losningstid input').value;
        const newUppdatering = flexWrapper.querySelector('.uppdatering input').value;
        const newKontakt = flexWrapper.querySelector('.kontakt input').value;

        flexWrapper.querySelector('strong').textContent = 'Driftstörning - ' + newTitle;
        flexWrapper.querySelector('.starttid').textContent = 'Starttid: ' + newStarttid;
        flexWrapper.querySelector('.problem').textContent = 'Problem: ' + newProblem;
        flexWrapper.querySelector('.atgard').textContent = 'Åtgärd pågår: ' + newAtgard;
        flexWrapper.querySelector('.losningstid').textContent = 'Förväntad lösningstid: ' + newLosningstid;
        flexWrapper.querySelector('.uppdatering').textContent = 'Nästa uppdatering: ' + newUppdatering;
        flexWrapper.querySelector('.kontakt').textContent = 'Kontakt: ' + newKontakt;

        saveBtn.remove();
        editBtn.disabled = false;
    });
}

// Lägg till event listener till knappen för att skapa nya containers vid klick
document.querySelector("#createUpcomingBtn").addEventListener("click", addUpcoming);

document.addEventListener('DOMContentLoaded', function () {
    var picker = new Pikaday({ field: document.getElementById('datepicker') });
});