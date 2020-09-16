import React from 'react';
import {BrowserRouter} from 'react-router-dom'

import GlobalStyle from './style/global'
import Route from './route'

function App() {
  return (
    <BrowserRouter>
      <Route/>
      <GlobalStyle/>
    </BrowserRouter>
  );
}

export default App;
