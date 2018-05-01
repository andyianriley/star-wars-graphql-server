export class Person {
    constructor({ connector }) {
        this.connector = connector
    }
    getByName(name) {
        return this.connector.fetchByName(name)
    }
}
