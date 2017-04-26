export default class Contact {
    constructor(id = 0, userName, isYou = false, image, date = new Date(), message) {
        this.id = id;
        this.userName = userName;
        this.isYou = isYou;
        this.userImageURL = image;
        this.date = date;
        this.message = message;
    }

    toString() {
        return `This is message from ${this.isYou ? "You" : this.userName} for ${this.isYou ? this.userName : "You"}, message text: "${this.message}" `;
    }
}