import React, {useState, useEffect} from 'react'
import { MdAddShoppingCart } from 'react-icons/md'
import {connect} from 'react-redux'

import * as CartActions from '../../store/module/cart/action'
import api from '../../service/api'
import {formatPrice} from '../../util/format'
import {ProductList} from './style'

function Home({dispatch, amount}) {

  const [products, setProducts] = useState([])

  useEffect(() => {
    async function loadProducts() {
      const res = await api.get('products')
      const data = res.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }))

      setProducts(data)
    }

    loadProducts()
  }, [])

  function handleAddProduct (id) {
    dispatch(CartActions.addToCartRequest(id))
  }

  return(
    <ProductList>
      {
        products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title}/>
            <p>{product.title}</p>
            <span>{product.priceFormatted}</span>

            <button type="button" onClick={() => handleAddProduct(product.id)}>
              <div>
                <MdAddShoppingCart size={16} color="#fff"/>
                {amount[product.id] || 0}
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))
      }
    </ProductList>
  )

}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount
    return amount
  }, {})
})

/** connect chama uma funcao e posteriormente retorna o Home */
export default connect(mapStateToProps)(Home);
