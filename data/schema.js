import { merge } from 'lodash'
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'

import {
    schema as vehicleSchema,
    resolvers as vehicleResolvers
} from './vehicle/schema'

import {
    schema as personSchema,
    resolvers as personResolvers
} from './person/schema'

const rootSchema = [
    `
    type Query {
      vehicle(vrm: String): Vehicle
      person(name: String): Person
    }

    schema {
      query: Query
    } 
`
]

const rootResolvers = {
    Query: {
        vehicle(root, { vrm }, context, { cacheControl }) {
            cacheControl.setCacheHint({ maxAge: 60 })
            return context.Vehicle.getByVRM(vrm)
        },
        person(root, { name }, context, { cacheControl }) {
            cacheControl.setCacheHint({ maxAge: 60 })
            return context.Person.getByName(
                name
            )
        }
    }
}

const schema = [
    ...rootSchema,
    ...vehicleSchema,
    ...personSchema
]
const resolvers = merge(rootResolvers, vehicleResolvers, personResolvers)

const executableSchema = makeExecutableSchema({ typeDefs: schema, resolvers })

export default executableSchema
