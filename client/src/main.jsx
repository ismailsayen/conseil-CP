import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'flowbite';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux'; // Import Provider
import store from './store'; // Import Redux store
const client = new ApolloClient({
  uri: 'http://localhost:4500/graphql',
  cache: new InMemoryCache(),
  credentials: 'same-origin',
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <Provider store={store}>
          <App />
        </Provider>
  </ApolloProvider>,

);
