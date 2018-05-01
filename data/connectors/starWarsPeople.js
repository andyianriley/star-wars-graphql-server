import rp from 'request-promise'

export class StarWarsPeopleConnector {

    constructor() {
        this.options = {
            json: true
        }
        this.endpoint = process.env.PEOPLE_WEBSERVICE_HOST || 'http://localhost:9002';
    }

    fetchByName(name) {
        console.log('name:' , name)
        return rp({ ...this.options, uri: `${this.endpoint}/people/${name}`})
        .then(response => {
            return response
        })
    }
}
