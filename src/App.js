import React from "react";
import Home from "./Views/Home.jsx";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";


const App = () => {

  const client = new ApolloClient({
    uri: "https://api.github.com/graphql",

    headers: {
      Authorization: "Bearer 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",
    },
    cache: new InMemoryCache(),
  });

  
  return (
    <ApolloProvider client={client}>
      <Home />;
    </ApolloProvider>
  )
};

export default App;
