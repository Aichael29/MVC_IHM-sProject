// controller.js
class AnnouncementsController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.init();
    }

    init() {
        this.view.form.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = this.view.getFormData();
            this.model.addAnnouncement(formData);
            window.location.replace('community.html');
        });
    }
}
