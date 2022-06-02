import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginCacheControl } from 'apollo-server-core';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    ApolloServerPluginCacheControl({
      // Cache everything for 1 second by default.
      defaultMaxAge: 10000,
      // Don't send the `cache-control` response header.
      calculateHttpHeaders: false,
    }),
  ],
});

// The `listen` method launches a web server (no need for express)
server.listen({ port: 4001 }).then(() => {
  console.log(`🚀 Server ready at http://localhost:4001`);
});
