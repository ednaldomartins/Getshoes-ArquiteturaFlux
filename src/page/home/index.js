import React, {Component} from 'react'
import { MdAddShoppingCart } from 'react-icons/md'
import {connect} from 'react-redux'

import * as CartActions from '../../store/module/cart/action'
import api from '../../service/api'
import {formatPrice} from '../../util/format'
import {ProductList} from './style'

class Home extends Component {

  state = {
    products: [],
  }

  async componentDidMount() {
    const res = await api.get('products')
    const data = res.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }))
    this.setState({
      products: data
    })
  }

  handleAddProduct = product => {
    const {dispatch} = this.props
    dispatch(CartActions.addToCart(product))
  }

  render () {
    const {products} = this.state
    const {amount} = this.props

    return(
      <ProductList>
        {
          products.map(product => (
            <li key={product.id}>
              <img src={product.image} alt={product.title}/>
              <p>{product.title}</p>
              <span>{product.priceFormatted}</span>

              <button type="button" onClick={() => this.handleAddProduct(product)}>
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

}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount
    return amount
  }, {})
})

/** connect chama uma funcao e posteriormente retorna o Home */
export default connect(mapStateToProps)(Home);
