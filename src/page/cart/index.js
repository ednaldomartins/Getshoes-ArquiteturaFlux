import React from 'react'
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from 'react-icons/md'
import {connect} from 'react-redux'

import * as CartAction from '../../store/module/cart/action'
import {Container, ProductTable, Total} from './style'

function Cart({cart, dispatch}) {
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
          {
            cart.map(product => (
              <tr>
              <td>
                <img src={product.image} alt={product.title}/>
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline size={28} color="#20bb10"/>
                  </button>
                  <input type="number" readOnly value={product.amount}/>
                  <button type="button">
                    <MdAddCircleOutline size={28} color="#20bb10"/>
                  </button>
                </div>
              </td>

              <td>
                <strong>R$897,70</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => dispatch(CartAction.removeFromCart(product.id))}>
                      <MdDelete size={28} color="#20bb10"/>
                </button>
              </td>
            </tr>
            ))
          }

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

const mapStateToProps = state => ({
  cart: state.cart,
})

export default connect(mapStateToProps)(Cart)
