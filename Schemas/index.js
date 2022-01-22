let database = require('../db.json')

const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} = require('graphql')

const UserType = require('./TypeDefs/UserType')

// запросы
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getAllUsers: {
            type: new GraphQLList(UserType),
            args: {
                id: { type: GraphQLInt },
            },
            resolve(parent, args) {
                return database;
            }
        }
    }
})
//  изменение в бд
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: {
            type: UserType,
            args: {
                name: { type: GraphQLString }
            },
            resolve(parent, args) {
                database.push({
                    id: database.length + 1,
                    name: args.name
                });
                return args;
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})