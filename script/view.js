// view.js
class AnnouncementsView {
    constructor(formId) {
        this.form = document.getElementById(formId);
    }

    getFormData() {
        return {
            address: document.getElementById('adresse').value,
            participants: document.getElementById('participants').value,
            dateTime: document.getElementById('dateHeure').value,
            sport: document.querySelector('input[name="sport"]:checked').id,
            description: document.getElementById('description').value
        };
    }
}
