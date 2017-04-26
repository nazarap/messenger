export default class Contact {
    constructor(id, name = "asd", image) {
        this.id = id;
        this.fullName = name;
        this.imageURL = image;
    }

    toString() {
        return `This is contact with name: ${this.fullName}; and image url = ${this.imageURL}`;
    }
}