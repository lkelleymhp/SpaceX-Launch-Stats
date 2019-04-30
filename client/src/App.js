import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import Launches from './components/Launches'
import logo from './logo.png';

//create client pass in object with 
const client = new ApolloClient({
  uri: '/graphql'
});

class App extends Component {
  render() {
    //wrap everything in return with apolloprovider
    return (
      <ApolloProvider client={client}>
      
          <div className="container">
            <img
              src={logo}
              alt="SpaceX"
              style={{ width: 300, display: 'block', margin: 'auto' }}
            />
           <Launches/>
          </div>

      </ApolloProvider>
    );
  }
}

export default App;