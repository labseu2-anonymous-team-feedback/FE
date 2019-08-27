import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const httpLink = createHttpLink({
  uri: 'https://anonymous-feedback-app.herokuapp.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');

  if (token) {
    return {
      headers: {
        ...headers,
        authorization: token,
      },
    };
  }

  return {
    headers: {
      ...headers,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
    <ToastContainer autoClose={3000} position="top-right" hideProgressBar />
  </ApolloProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
