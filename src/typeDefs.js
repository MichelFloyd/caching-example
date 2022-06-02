import { gql } from 'apollo-server';
import { typeDefs as scalarTypeDefs } from 'graphql-scalars';

export const typeDefs = [
  ...scalarTypeDefs,
  gql`
    enum CacheControlScope {
      PUBLIC
      PRIVATE
    }

    directive @cacheControl(
      maxAge: Int
      scope: CacheControlScope
      inheritMaxAge: Boolean
    ) on FIELD_DEFINITION | OBJECT | INTERFACE | UNION

    type CachingDemo {
      currentTime: DateTime!
      cachedTime60: DateTime! @cacheControl(maxAge: 60, scope: PUBLIC)
      cacheHit: Boolean
    }
    type Query {
      demo: CachingDemo
    }
  `,
];
