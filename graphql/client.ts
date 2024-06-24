/* eslint-disable import/no-mutable-exports */
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
        uri: 'https://mi-gestion-ingresos.vercel.app/api/graphql',
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
          uri: 'https://mi-gestion-ingresos.vercel.app/api/graphql',
        }),
      ]),

      connectToDevTools: true,
    });
  }
  client = global.apolloGlobal;
}
export { client };
