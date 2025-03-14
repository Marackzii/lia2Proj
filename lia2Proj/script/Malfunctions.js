'use strict';

document.addEventListener("DOMContentLoaded", function () {
    const editBtn = document.querySelector(".editBtn");
    const flexContainer = document.querySelector(".flex-container1");

    editBtn.addEventListener("click", function () {
        // Hämta den befintliga texten från flex-container och dela upp den i rader
        let textLines = flexContainer.innerHTML.split("<br>");

        // Töm flex-container innan vi lägger till de redigerbara fälten
        flexContainer.innerHTML = "";

        // Skapa input-fält för varje rad i texten
        textLines.forEach(line => {
            let inputFieldContainer = document.createElement("div");

            // Kontrollera om raden innehåller någon av de fält som inte ska vara redigerbara
            const nonEditableFields = [
                "Starttid:",
                "Problem:",
                "Åtgärd pågår:",
                "Förväntad lösningstid:",
                "Nästa uppdatering:",
                "Kontakt:"
            ];

            let isEditable = true;

            // Kontrollera om raden innehåller någon av de fält som inte ska vara redigerbara
            nonEditableFields.forEach(field => {
                if (line.includes(field)) {
                    isEditable = false;
                }
            });

            if (isEditable) {
                // Om raden ska vara redigerbar, skapa ett input-fält för värdet
                let inputField = document.createElement("input");
                inputField.type = "text";
                inputField.value = line.trim().replace(/^.*?:\s*/, ""); // Ta bort etiketten från input-fältet
                inputField.style.width = "100%";
                inputField.style.marginBottom = "10px";
                inputField.style.padding = "5px";
                
                // Lägg till input-fältet i containern
                inputFieldContainer.appendChild(inputField);
            } else {
                // Om raden inte ska vara redigerbar, skapa en vanlig div med en etikett
                let div = document.createElement("div");
                div.textContent = line.trim(); // Lägg till radens text (etikett + värde)
                div.style.marginBottom = "10px"; // Ge lite mellanrum mellan fälten
                inputFieldContainer.appendChild(div);
            }

            flexContainer.appendChild(inputFieldContainer);
        });

        // Skapa en spara-knapp
        let saveBtn = document.createElement("button");
        saveBtn.textContent = "Spara";
        saveBtn.style.marginTop = "10px";
        saveBtn.style.padding = "5px 10px";
        saveBtn.style.backgroundColor = "#222";
        saveBtn.style.color = "#fff";
        saveBtn.style.border = "none";
        saveBtn.style.borderRadius = "5px";
        saveBtn.style.cursor = "pointer";
        flexContainer.appendChild(saveBtn);

        // Lyssna på klick på spara-knappen
        saveBtn.addEventListener("click", function () {
            let updatedText = "";
            let allFilled = true;
            
            // Gå igenom alla input-fält och skapa den nya texten
            Array.from(flexContainer.querySelectorAll("input")).forEach(input => {
                if (input.value.trim() === "") {
                    allFilled = false; // Om något fält är tomt, sätt allFilled till false
                }
                updatedText += input.value.trim() + "<br>"; // Lägg till den nya texten
            });

            // Om alla fält är ifyllda, spara ändringarna
            if (allFilled) {
                flexContainer.innerHTML = updatedText.trim(); // Uppdatera texten i flex-container

                // Lägg tillbaka redigeringsknappen
                let newEditBtn = document.createElement("button");
                newEditBtn.textContent = "Redigera";
                newEditBtn.classList.add("editBtn");
                newEditBtn.style.marginTop = "10px";
                flexContainer.appendChild(newEditBtn);

                // Lägg till en event listener på den nya redigeringsknappen
                newEditBtn.addEventListener("click", arguments.callee);
            } else {
                alert("Alla fält måste fyllas i!"); // Om något fält är tomt, visa ett meddelande
            }
        });
    });
});
