'use strict';

document.addEventListener("DOMContentLoaded", function () {
    // Skapa instans av Sidebar när DOM är laddad
    new Sidebar();
});

// Sidebar-klass för att hantera öppning och stängning av sidepanelen
class Sidebar {
    constructor() {
        this.sidebar = document.getElementById('mySidebar');
        this.openBtn = document.getElementById('openbtn');
        this.closeBtn = document.getElementById('closebtn');
        this.navbarNav = document.querySelector(".navbar-nav");
        
        // Lägg till eventlyssnare för öppna/stänga
        this.openBtn.addEventListener('click', () => this.openNav());
        this.closeBtn.addEventListener('click', () => this.closeNav());
    }

    // Öppna sidepanelen
    openNav() {
        this.sidebar.style.width = '150px'; // Du kan justera bredden efter behov
        document.getElementById("main").style.marginRight = "250px";

        // Flytta navbar-länkar till vänster
        this.navbarNav.classList.add("shift-left");
    }

    // Stäng sidepanelen
    closeNav() {
        this.sidebar.style.width = '0';
        document.getElementById("main").style.marginRight = '0';

        // Återställ navbar-länkar till ursprunglig position
        this.navbarNav.classList.remove("shift-left");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Lägg till event listener till alla redigeringsknappar
    document.querySelectorAll('.editBtn').forEach(button => {
        button.addEventListener('click', function (event) {
            const wrapper1 = event.target.closest('.flex-item1');
            const wrapper2 = event.target.closest('.flex-item2');

            if (wrapper1) {
                showEditForm(event, wrapper1);
            } else if (wrapper2) {
                showEditForm(event, wrapper2);
            }
        });
    });
});

// Gemensam funktion för att visa redigeringsformuläret för både item1 och item2
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
    flexWrapper.appendChild(saveBtn);

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

class CollapseController {
    constructor(collapsebarId, toggleBtnId, itemsSelector, mainContentId) {
        this.collapsebar = document.getElementById(collapsebarId);
        this.toggleBtn = document.getElementById(toggleBtnId);
        this.items = document.querySelectorAll(itemsSelector);
        this.mainContent = document.getElementById(mainContentId);

        this.toggleBtn.addEventListener('click', () => this.toggle());
    }

    toggle() {
        this.collapsebar.classList.toggle('collapsed');
        this.mainContent.classList.toggle('collapsed-margin');
        this.items.forEach(item => {
            item.classList.toggle('collapsed');
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new CollapseController('redcollapsebar', 'redtoggleCollapse', '.flex-item1', 'main-content1');
});

document.addEventListener("DOMContentLoaded", function () {
  const redCollapseBar = document.getElementById("redcollapsebar");
  const orangeCollapseBar = document.getElementById("orangecollapsebar");
  const redToggleBtn = document.getElementById("redtoggleCollapse");
  const orangeToggleBtn = document.getElementById("orangetoggleCollapse");

  redToggleBtn.addEventListener("click", function () {
    redCollapseBar.classList.toggle("collapsed");
  });

  orangeToggleBtn.addEventListener("click", function () {
    orangeCollapseBar.classList.toggle("collapsed");
  });
});

// Funktion för att flytta kort mellan sektionerna och ändra färg
function moveCardToAnotherSection(cardElement, targetContainer) {
    // Flytta kortet till målcontainern
    targetContainer.appendChild(cardElement);

    // Ändra färg baserat på målcontainern
    if (targetContainer.classList.contains('flex-wrapper1'&&'lamp-container1')) {
        cardElement.style.borderColor = '#e12a2a'; // Röd färg
        cardElement.style.backgroundColor = 'red'; 
    } else if (targetContainer.classList.contains('flex-wrapper2')) {
        cardElement.style.borderColor = '#f8c621'; // Orange färg
    }
}

// Lägg till event listeners för flyttknapparna
document.querySelectorAll('.moveBtn').forEach(button => {
    button.addEventListener('click', function (event) {
        // Hitta både röda och orangea kort
        const cardElement = event.target.closest('.flex-item1') || event.target.closest('.flex-item2');
        if (!cardElement) return;

        const currentWrapper = cardElement.parentElement;
        let targetWrapper;

        if (currentWrapper.classList.contains('flex-wrapper1')) {
            targetWrapper = document.querySelector('.flex-wrapper2');
        } else if (currentWrapper.classList.contains('flex-wrapper2')) {
            targetWrapper = document.querySelector('.flex-wrapper1');
        } else {
            return;
        }

        moveCardToAnotherSection(cardElement, targetWrapper);
    });
});

// Funktion för att flytta kort mellan sektionerna och ändra färg och lampa
function moveCardToAnotherSection(cardElement, targetContainer) {
    // Flytta kortet till målcontainern
    targetContainer.appendChild(cardElement);

    // Ta bort gamla lamp-klasser
    const lamp = cardElement.querySelector('.lamp1, .lamp2');
    if (lamp) {
        lamp.classList.remove('lamp1', 'lamp2');
    }

    // Ändra lampa baserat på målcontainern
    if (targetContainer.classList.contains('flex-wrapper1')) {
        cardElement.style.borderColor = '#e12a2a'; // Röd färg
        // Byt till röd lampa
        if (lamp) lamp.classList.add('lamp1');
        // Byt klasser för kortet
        cardElement.classList.remove('flex-item2');
        cardElement.classList.add('flex-item1');
        // Byt lamp-container klass om det behövs
        const lampContainer = cardElement.querySelector('.lamp-container2, .lamp-container1');
        if (lampContainer) {
            lampContainer.classList.remove('lamp-container2');
            lampContainer.classList.add('lamp-container1');
        }
    } else if (targetContainer.classList.contains('flex-wrapper2')) {
        cardElement.style.borderColor = '#f8c621'; // Orange färg
        // Byt till orange lampa
        if (lamp) lamp.classList.add('lamp2');
        // Byt klasser för kortet
        cardElement.classList.remove('flex-item1');
        cardElement.classList.add('flex-item2');
        // Byt lamp-container klass om det behövs
        const lampContainer = cardElement.querySelector('.lamp-container1, .lamp-container2');
        if (lampContainer) {
            lampContainer.classList.remove('lamp-container1');
            lampContainer.classList.add('lamp-container2');
        }
    }
}