
const port = process.env.PORT || 9000;

import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import schema from './data/schema'

import { Vehicle } from './data/vehicle/model'
import { Person } from './data/person/model'

import { StarWarsPeopleConnector } from './data/connectors/starWarsPeople.js'
import { StarWarsVehicleConnector } from './data/connectors/starWarsVehicle.js'

const graphQLServer = express()

graphQLServer.use(
    '/graphql',
    cookieParser(),
    bodyParser.json({ limit: '50mb' }),
    graphqlExpress(req => {

        const starWarsPeopleConnector = new StarWarsPeopleConnector()
        const starWarsVehicleConnector = new StarWarsVehicleConnector()

        return {
            schema,
            tracing: false,
            cacheControl: true,
            context: {
                Person: new Person({ connector: starWarsPeopleConnector }),
                Vehicle: new Vehicle({ connector: starWarsVehicleConnector })
            }
        }
    })
) // graphqlExpress({ schema })
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

graphQLServer.listen(port, () =>
    console.log(
        `GraphiQL is now running on http://localhost:${port}/graphiql`
    )
)

