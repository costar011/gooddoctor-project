import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Client from "./apollo/Client";
import { ApolloProvider } from "react-apollo-hooks";

ReactDOM.render(
  <ApolloProvider client={Client}>
    <App />
  </ApolloProvider>,
  document.getElementById("app")
);
