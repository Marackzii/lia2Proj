'use strict';

document.addEventListener("DOMContentLoaded", function () {
    // Funktion för att visa redigeringsformuläret
    function showEditForm(event) {
        const flexWrapper = event.target.closest('.flex-wrapper2');
        const title = flexWrapper.querySelector('strong').textContent.replace('Driftstörning - ', '');
        const starttid = flexWrapper.querySelector('.starttid').textContent.replace('Starttid: ', '');
        const problem = flexWrapper.querySelector('.problem').textContent.replace('Problem: ', '');
        const atgard = flexWrapper.querySelector('.atgard').textContent.replace('Åtgärd pågår: ', '');
        const losningstid = flexWrapper.querySelector('.losningstid').textContent.replace('Förväntad lösningstid: ', '');
        const uppdatering = flexWrapper.querySelector('.uppdatering').textContent.replace('Nästa uppdatering: ', '');
        const kontakt = flexWrapper.querySelector('.kontakt').textContent.replace('Kontakt: ', '');

        // Skapa input-fält för varje rad i texten
        flexWrapper.querySelector('strong').innerHTML = `Driftstörning - <input type="text" value="${title}" class="edit-input">`;
        flexWrapper.querySelector('.starttid').innerHTML = `Starttid: <input type="text" value="${starttid}" class="edit-input">`;
        flexWrapper.querySelector('.problem').innerHTML = `Problem: <input type="text" value="${problem}" class="edit-input">`;
        flexWrapper.querySelector('.atgard').innerHTML = `Åtgärd pågår: <input type="text" value="${atgard}" class="edit-input">`;
        flexWrapper.querySelector('.losningstid').innerHTML = `Förväntad lösningstid: <input type="text" value="${losningstid}" class="edit-input">`;
        flexWrapper.querySelector('.uppdatering').innerHTML = `Nästa uppdatering: <input type="text" value="${uppdatering}" class="edit-input">`;
        flexWrapper.querySelector('.kontakt').innerHTML = `Kontakt: <input type="text" value="${kontakt}" class="edit-input">`;

        // Skapa en spara-knapp
        let saveBtn = document.createElement("button");
        saveBtn.textContent = "Spara";
        saveBtn.classList.add("saveBtn");
        flexWrapper.appendChild(saveBtn);

        // Lyssna på klick på spara-knappen
        saveBtn.addEventListener("click", function () {
            // Hämta de nya värdena från input-fälten
            const newTitle = flexWrapper.querySelector('strong input').value;
            const newStarttid = flexWrapper.querySelector('.starttid input').value;
            const newProblem = flexWrapper.querySelector('.problem input').value;
            const newAtgard = flexWrapper.querySelector('.atgard input').value;
            const newLosningstid = flexWrapper.querySelector('.losningstid input').value;
            const newUppdatering = flexWrapper.querySelector('.uppdatering input').value;
            const newKontakt = flexWrapper.querySelector('.kontakt input').value;

            // Uppdatera texten i flex-wrapper med de nya värdena
            flexWrapper.querySelector('strong').textContent = 'Driftstörning - ' + newTitle;
            flexWrapper.querySelector('.starttid').textContent = 'Starttid: ' + newStarttid;
            flexWrapper.querySelector('.problem').textContent = 'Problem: ' + newProblem;
            flexWrapper.querySelector('.atgard').textContent = 'Åtgärd pågår: ' + newAtgard;
            flexWrapper.querySelector('.losningstid').textContent = 'Förväntad lösningstid: ' + newLosningstid;
            flexWrapper.querySelector('.uppdatering').textContent = 'Nästa uppdatering: ' + newUppdatering;
            flexWrapper.querySelector('.kontakt').textContent = 'Kontakt: ' + newKontakt;

            // Ta bort spara-knappen
            saveBtn.remove();
        });
    }

    // Lägg till event listener till redigeringsknapparna
    document.querySelectorAll('.editBtn').forEach(button => {
        button.addEventListener('click', showEditForm);
    });
});

class CollapseController {
    constructor(collapsebarId, toggleBtnId, itemsSelector, mainContentId) {
        this.collapsebar = document.getElementById(collapsebarId);
        this.toggleBtn = document.getElementById(toggleBtnId);
        this.items = document.querySelectorAll(itemsSelector);
        this.mainContent = document.getElementById(mainContentId);

        // Lägg till event listener för att trigga kollaps
        this.toggleBtn.addEventListener('click', () => this.toggle());
    }

    toggle() {
        // Toggle collapsebar och mainContent
        this.collapsebar.classList.toggle('collapsed');
        this.mainContent.classList.toggle('collapsed-margin');

        // Toggle kollaps för varje flex-item
        this.items.forEach(item => {
            item.classList.toggle('collapsed');
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new CollapseController('orangecollapsebar', 'orangetoggleCollapse', '.flex-item2', 'main-content');
});