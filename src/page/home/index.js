import React from 'react'
import { MdAddShoppingCart } from 'react-icons/md'

import {ProductList} from './style'

export default function Home() {
  return(
    <ProductList>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-adidas-8k-2020-masculino/10/NQQ-0062-010/NQQ-0062-010_detalhe1.jpg?ts=1585088783?ims=280x280" alt="Tênis"/>
        <p> Tênis adades</p>
        <span>R$299,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff"/>
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  )
}
