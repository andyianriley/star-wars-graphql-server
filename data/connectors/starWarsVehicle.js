import rp from 'request-promise'

export class StarWarsVehicleConnector {

    constructor() {
        this.options = {
            json: true
        }
        this.endpoint = process.env.VEHICLE_WEBSERVICE_HOST || 'http://localhost:9001';
    }

    fetchByVRM(vrm) {
        console.log('vrm:' , vrm)
        return rp({
            ...this.options,
            uri: `${this.endpoint}/vehicles/${vrm}`
        })
        .then(response => {
            return response
        })
    }
}
