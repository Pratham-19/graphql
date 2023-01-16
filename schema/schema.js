const graphql = require('graphql');
const _ = require('lodash');

const { 
    GraphQlObjectType,
    GraphQlString,
    GraphQlInt,
    GraphQlID,
 } = graphql

const BookType = new GraphQlObjectType({
    name: "Book",
    fields: () => ({
        id: { type: GraphQlID },
        name: { type: GraphQlString },
        genre: { type: GraphQlString },

    })
})
const AuthorType = new GraphQlObjectType({
    name: "Author",
    fields: () => ({
        id: { type: GraphQlID },
        name: { type: GraphQlString },
        age: { type: GraphQlInt },

    })
})