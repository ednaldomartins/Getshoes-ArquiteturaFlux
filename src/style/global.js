import {createGlobalStyle} from 'styled-components'

import 'react-toastify/dist/ReactToastify.css'
import background from '../assets/image/background.svg'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Kufam&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: 0;
  }

  body {
    background: #041204 url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased;
  }

  /** escoder botao de de aumentar/diminuir do spin no firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  body, input, button {
    font: 14px Kufam, sans-serif;
  }

  #root {
    max-width: 1080px;
    margin: 0 auto;
    padding: 16px 24px 32px
  }

  button {
    cursor: pointer;
  }

`
