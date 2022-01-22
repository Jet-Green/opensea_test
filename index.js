const express = require('express');
var cors = require('cors')
const app = express();
const PORT = 9002;

// импровизированная база данных
let database = require('./db.json')

const schema = require('./Schemas')

const { graphqlHTTP } = require("express-graphql");


app.use('/graphql', graphqlHTTP({
    schema,
    // graphiql - UI, открывающийся на /graphql
    graphiql: true
}))
// app.use(cors())
// app.use(express.urlencoded({
//     extended: true
// }))

app.listen(PORT, function () {
    console.log('listening on port ' + PORT)
})