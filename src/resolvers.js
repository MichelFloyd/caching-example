let cacheHit = false;

export const resolvers = {
  CachingDemo: {
    cachedTime60: (_, __, ___, info) => {
      info.cacheControl.setCacheHint({ maxAge: 60, scope: 'PUBLIC' });
      // ideally this should only get updated once/minute
      cacheHit = false;
      return new Date();
    },
    cacheHit: () => cacheHit,
  },
  Query: {
    demo: () => {
      // just return the currentTime field, the type resolvers above will return the remaining field(s)
      cacheHit = true;
      return { currentTime: new Date() };
    },
  },
};
