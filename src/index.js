const { prisma } = require('./generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Post = require('./resolvers/Post')
const Comment = require('./resolvers/Comment')
const Subscription = require('./resolvers/Subscription')


const resolvers = {
    Query,
    Mutation,
    Subscription,
    User,
    Post,
    Comment
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => {
        return {
          ...request,
          prisma,
        }
      },
})

server.start( () => console.log('Server started at port 4000'))