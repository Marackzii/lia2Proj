'use strict';

document.addEventListener("DOMContentLoaded", function () {
    // Funktion för att visa redigeringsformuläret
    function showEditForm(event) {
        const flexContainer = event.target.closest('.flex-container2');
        const title = flexContainer.querySelector('strong').textContent.replace('Driftstörning - ', '');
        const starttid = flexContainer.querySelector('.starttid').textContent.replace('Starttid: ', '');
        const problem = flexContainer.querySelector('.problem').textContent.replace('Problem: ', '');
        const atgard = flexContainer.querySelector('.atgard').textContent.replace('Åtgärd pågår: ', '');
        const losningstid = flexContainer.querySelector('.losningstid').textContent.replace('Förväntad lösningstid: ', '');
        const uppdatering = flexContainer.querySelector('.uppdatering').textContent.replace('Nästa uppdatering: ', '');
        const kontakt = flexContainer.querySelector('.kontakt').textContent.replace('Kontakt: ', '');

        // Skapa input-fält för varje rad i texten
        flexContainer.querySelector('strong').innerHTML = `Driftstörning - <input type="text" value="${title}" class="edit-input">`;
        flexContainer.querySelector('.starttid').innerHTML = `Starttid: <input type="text" value="${starttid}" class="edit-input">`;
        flexContainer.querySelector('.problem').innerHTML = `Problem: <input type="text" value="${problem}" class="edit-input">`;
        flexContainer.querySelector('.atgard').innerHTML = `Åtgärd pågår: <input type="text" value="${atgard}" class="edit-input">`;
        flexContainer.querySelector('.losningstid').innerHTML = `Förväntad lösningstid: <input type="text" value="${losningstid}" class="edit-input">`;
        flexContainer.querySelector('.uppdatering').innerHTML = `Nästa uppdatering: <input type="text" value="${uppdatering}" class="edit-input">`;
        flexContainer.querySelector('.kontakt').innerHTML = `Kontakt: <input type="text" value="${kontakt}" class="edit-input">`;

        // Skapa en spara-knapp
        let saveBtn = document.createElement("button");
        saveBtn.textContent = "Spara";
        saveBtn.classList.add("saveBtn");
        flexContainer.appendChild(saveBtn);

        // Lyssna på klick på spara-knappen
        saveBtn.addEventListener("click", function () {
            // Hämta de nya värdena från input-fälten
            const newTitle = flexContainer.querySelector('strong input').value;
            const newStarttid = flexContainer.querySelector('.starttid input').value;
            const newProblem = flexContainer.querySelector('.problem input').value;
            const newAtgard = flexContainer.querySelector('.atgard input').value;
            const newLosningstid = flexContainer.querySelector('.losningstid input').value;
            const newUppdatering = flexContainer.querySelector('.uppdatering input').value;
            const newKontakt = flexContainer.querySelector('.kontakt input').value;

            // Uppdatera texten i flex-container med de nya värdena
            flexContainer.querySelector('strong').textContent = 'Driftstörning - ' + newTitle;
            flexContainer.querySelector('.starttid').textContent = 'Starttid: ' + newStarttid;
            flexContainer.querySelector('.problem').textContent = 'Problem: ' + newProblem;
            flexContainer.querySelector('.atgard').textContent = 'Åtgärd pågår: ' + newAtgard;
            flexContainer.querySelector('.losningstid').textContent = 'Förväntad lösningstid: ' + newLosningstid;
            flexContainer.querySelector('.uppdatering').textContent = 'Nästa uppdatering: ' + newUppdatering;
            flexContainer.querySelector('.kontakt').textContent = 'Kontakt: ' + newKontakt;

            // Ta bort spara-knappen
            saveBtn.remove();
        });
    }

    // Lägg till event listener till redigeringsknapparna
    document.querySelectorAll('.editBtn').forEach(button => {
        button.addEventListener('click', showEditForm);
    });
});