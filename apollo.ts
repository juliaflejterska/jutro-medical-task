import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apollo = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache(),
});
