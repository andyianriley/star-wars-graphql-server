export class Vehicle {
    constructor({ connector }) {
        this.connector = connector
    }
    getByVRM(vrm) {
        return this.connector.fetchByVRM(vrm)
    }
}