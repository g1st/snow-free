import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import Routes from './Routes';
import Layout from './hoc/Layout/Layout';

import classes from './style.css';
import reactLogo from './assets/React-icon.png';

const App = () => <Layout>{/* {routes here later} */}</Layout>;

export default App;

// as a reference for now
// <BrowserRouter>
//   <main className="container">
//     <Layout />
//     <div>
//       <h1>hello world!</h1>
//       <img className="container__image" alt="react logo" src={reactLogo} />
//       <p>If you see this everything is working!</p>
//     </div>
//     <ul className="left">
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/about">About</Link>
//       </li>
//     </ul>
//     <Routes />
//   </main>
// </BrowserRouter>
