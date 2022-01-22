const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
} = require('graphql')

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
    })
})

module.exports = UserType