import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { MatchesList } from './screens/MatchesList';
import { Match } from './screens/Match';
import { HashRouter, Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <HashRouter>
      <Routes>
        <Route path="/" element={<MatchesList />} />
        <Route path="/:id" element={<Match />} />
      </Routes>
    </HashRouter>
  </ApolloProvider>
);

render(<App />, document.getElementById('root'));
