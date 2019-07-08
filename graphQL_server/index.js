import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './schema'

const app = express()

app.get('/', (req, res) => {
    res.send('Hello world ;)')
})

// resolver
const root = {client: () => {
    return {
        "id": 9857259875392857,
        "name": "John",
        "surname": "Popper",
        "company": "IKEA",
        "email": "johnpopper@mail.com"
        }
    }
}

app.use('/graphql', graphqlHTTP({
    // which schema is going to be used
    schema,
    // resolver is added as rootValue
    rootValue: root,
    // activate use of graphiql
    graphiql: true
}))

app.listen(8000, () => console.log('The server is running'))