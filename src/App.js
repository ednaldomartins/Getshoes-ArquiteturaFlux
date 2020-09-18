import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {ToastContainer} from 'react-toastify'

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
        <ToastContainer autoClose={5000}/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
