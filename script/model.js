// data.js
class AnnouncementsModel {
    constructor() {
        this.key = 'announcements';
    }

    getAnnouncements() {
        return JSON.parse(localStorage.getItem(this.key)) || [];
    }

    addAnnouncement(announcement) {
        const announcements = this.getAnnouncements();
        announcements.push(announcement);
        localStorage.setItem(this.key, JSON.stringify(announcements));
    }
    
}
