import React from 'react';
import { render } from 'react-dom';
import GraphiQL from 'graphiql';
import 'graphiql/graphiql.css';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const App = () => (
  <GraphiQL
    headerEditorEnabled
    fetcher={async graphQLParams => {
      const data = await fetch('http://localhost:4000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: '*/*',
        },
        body: JSON.stringify(graphQLParams),
        credentials: 'same-origin',
        mode: 'cors',
      });
      return data.json().catch(() => data.text());
    }}
  />
);

render(<App />, document.getElementById('root'));
