import { ApolloClient, InMemoryCache, from, HttpLink } from '@apollo/client';

declare global {
  var apolloGlobal: ApolloClient<object>;
}

let client: ApolloClient<object>;
// cambio variables
if (process.env.NODE_ENV === 'production') {
  client = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([
      new HttpLink({
        uri: 'https://resultados.institutogastroclinico.com/api/graphql',
      }),
    ]),

    connectToDevTools: true,
  });
} else {
  if (!global.apolloGlobal) {
    global.apolloGlobal = new ApolloClient({
      cache: new InMemoryCache(),
      link: from([
        new HttpLink({
          uri: 'http://localhost:3000/api/graphql',
        }),
      ]),

      connectToDevTools: true,
    });
  }
  client = global.apolloGlobal;
}
export { client };
