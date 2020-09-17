import React from 'react';
import {Link} from 'react-router-dom'
import {MdShoppingBasket} from 'react-icons/md'

import {Container, Cart} from './style'
import logo from '../../assets/image/logo.png'

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Getshoes"/>
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>3 itens</span>
        </div>
        <MdShoppingBasket size={32} color="#fff"/>
      </Cart>
    </Container>
  );
}
