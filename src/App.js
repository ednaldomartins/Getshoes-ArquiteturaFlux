import React from 'react';
import {BrowserRouter} from 'react-router-dom'

import GlobalStyle from './style/global'
import Route from './route'
import Header from './component/header'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Route/>
      <GlobalStyle/>
    </BrowserRouter>
  );
}

export default App;
