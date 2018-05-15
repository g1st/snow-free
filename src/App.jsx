import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';
import Layout from './hoc/Layout/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes />
    </Layout>
  </BrowserRouter>
);

export default App;
