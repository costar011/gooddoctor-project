import ApolloClient from "apollo-boost";
import { resolvers, defaults } from "./LocalState";

export default new ApolloClient({
  uri: `http://localhost:7000/graphql`,
  clientState: {
    defaults: defaults,
    resolvers: resolvers,
  },
});
