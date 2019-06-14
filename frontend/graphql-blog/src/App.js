import React  from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";
import Posts from './Posts';
import './App.css';

const client = new ApolloClient({
  uri: "http://localhost:4000/"
});

const App = () => (
  <ApolloProvider client={client}>
      <div className="container">
        <nav className="navbar navbar-dark bg-info">
            <a className="navbar-brand" href="http://localhost:3000/"><b>React GraphQL Blog</b></a>
        </nav>
        <Posts />
      </div>
  </ApolloProvider>
)

export default App;
