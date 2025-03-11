class Navigation {
    constructor() {
        // Hitta alla menylänkar
        this.navLinks = document.querySelectorAll('.navbar-nav .dropdown-item');
        
        // Lägg till en event listener för varje länk
        this.navLinks.forEach(link => {
            link.addEventListener('Malfunctions', this.handleLinkClick);
            link.addEventListener('Ongoing', this.handleLinkClick);
            link.addEventListener('Upcomings', this.handleLinkClick);
            link.addEventListener('Finished', this.handleLinkClick);
        });
    }

    handleLinkClick(event) {
        // Förhindra standardbeteende (länkens navigation)
        event.preventDefault();
    }
}

// När sidan är laddad, skapa en instans av Navigation-klassen
document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
});
