import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './hoc/ScrollToTop';

import Routes from './Routes';
import Layout from './hoc/Layout/Layout';

const App = props => (
  <BrowserRouter>
    <Layout>
      <ScrollToTop />
      <Routes />
    </Layout>
  </BrowserRouter>
);

export default App;
