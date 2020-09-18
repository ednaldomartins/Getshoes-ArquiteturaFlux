import React from 'react';
import {Link} from 'react-router-dom'
import {MdShoppingBasket} from 'react-icons/md'
import {useSelector} from 'react-redux'

import {Container, Cart} from './style'
import logo from '../../assets/image/logo.png'

export default function Header() {
  const cartSize = useSelector(state => state.cart.length)

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Getshoes"/>
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={32} color="#fff"/>
      </Cart>
    </Container>
  );
}
