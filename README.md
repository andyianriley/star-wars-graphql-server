## Sample project for Star Wars themed people Data
This is image will be published to andyianriley/star-wars-graphql-server.

To use this image locally build the image.
```
docker-compose build
docker-compose up
```
Then you will be able to reference it in other dockerfiles.

You can set environment variables PORT, default 9000.

Sample query

http://localhost:9000/graphiql

query 

```gql
{
  person(name: "Luke Skywalker") {
    name
    force
    vrm
    vehicle {
      vrm
      maxSpeed
    }
  }
  vehicle(vrm: "W00K133") {
    vrm
    maxSpeed
    length
  }
}
```