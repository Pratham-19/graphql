const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const port = process.env.PORT || 3002;
const schema = require("./schema/schema")
const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(port,()=>{
    console.log("Listening on port",port);
})