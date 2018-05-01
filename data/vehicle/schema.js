import { property, constant } from 'lodash'

export const schema = [
    `
type Vehicle {
    vrm: String
    name: String
    maxSpeed: String
    hyperDriveRating: String
    length: String
  }
`
]

export const resolvers = {
    Vehicle: {
        vrm: property('vrm'),
        name: property('name'),
        maxSpeed: property('maxSpeed'),
        hyperDriveRating: property('hyper-drive-rating'),
        length: property('length')
    }
}
