'use strict';

document.addEventListener("DOMContentLoaded", function () {
    // Skapa instans av Sidebar och EditForm när DOM är laddad
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
    adjustFooterPosition();
  });

  orangeToggleBtn.addEventListener("click", function () {
    orangeCollapseBar.classList.toggle("collapsed");
    adjustFooterPosition();
  });

  function adjustFooterPosition() {
    const footer = document.querySelector("footer");
    const mainContentHeight = document.getElementById("main-content1").offsetHeight +
                              document.getElementById("main-content2").offsetHeight;

    // Justera footerns position baserat på innehållets höjd
    footer.style.marginTop = `${mainContentHeight}px`;
  }
});