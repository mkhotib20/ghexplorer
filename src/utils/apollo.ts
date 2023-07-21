import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: '/api/gql',
  cache: new InMemoryCache({
    typePolicies: {
      User: {
        keyFields: ['id'],
      },
      Repository: {
        keyFields: ['id'],
      },
      Organization: {
        keyFields: ['id'],
      },
    },
  }),
});

export default apolloClient;
