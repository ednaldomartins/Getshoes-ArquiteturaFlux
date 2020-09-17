import React, {Component} from 'react'
import { MdAddShoppingCart } from 'react-icons/md'

import api from '../../service/api'
import {formatPrice} from '../../util/format'
import {ProductList} from './style'

export default class Home extends Component {

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

  render () {
    const {products} = this.state

    return(
      <ProductList>
        {
          products.map(product => (
            <li key={product.id}>
              <img src={product.image} alt={product.title}/>
              <p>{product.title}</p>
              <span>{product.priceFormatted}</span>

              <button type="button">
                <div>
                  <MdAddShoppingCart size={16} color="#fff"/>
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
