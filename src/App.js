import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

import GlobalStyle from './style/global'
import Route from './route'
import Header from './component/header'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <Route/>
        <GlobalStyle/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
