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
  <div>
        <nav className="navbar navbar-dark bg-info">
            <div className="container">
                <a className="navbar-brand" href="http://localhost:3000/"><b>React GraphQL Blog</b></a>
            </div>
            
        </nav>
        <div className="container">
        <Posts />
        </div>
        

    </div>

  </ApolloProvider>
)

export default App;
