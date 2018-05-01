import { property, constant } from 'lodash'

export const schema = [
    `
type Person {
    name: String
    vrm: String
    vehicle: Vehicle
    force: String
  }
`
]

export const resolvers = {
    Person: {
        name: property('name'),
        vrm: property('vehicle_vrm'),
        force: property('force'),
        vehicle({ vehicle_vrm }, _, context) {
            return context.Vehicle.getByVRM(vehicle_vrm)
        }
    }
}
