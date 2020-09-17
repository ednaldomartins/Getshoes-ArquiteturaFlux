import React from 'react'
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from 'react-icons/md'

import {Container, ProductTable, Total} from './style'

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th/>
            <th>PRODUTO</th>
            <th>QUANTIDADE</th>
            <th>SUBTOTAL</th>
            <th/>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>
              <img src="https://static.netshoes.com.br/produtos/tenis-adidas-8k-2020-masculino/10/NQQ-0062-010/NQQ-0062-010_detalhe1.jpg?ts=1585088783?ims=280x280" alt="Tênis"/>
            </td>
            <td>
              <strong>Tênis adades</strong>
              <span>R$299,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={28} color="#20bb10"/>
                </button>
                <input type="number" readOnly value={1}/>
                <button type="button">
                  <MdAddCircleOutline size={28} color="#20bb10"/>
                </button>
              </div>
            </td>

            <td>
              <strong>R$897,70</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={28} color="#20bb10"/>
              </button>
            </td>
          </tr>

        </tbody>
      </ProductTable>

      <footer>
        <button type="button"> Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$897,70</strong>
        </Total>
      </footer>
    </Container>
  )
}
