import { all, call, put, select, takeLatest } from 'redux-saga/effects'

import api from '../../../service/api'
import {formatPrice} from '../../../util/format'
import {addToCartSuccess, updateAmount} from './action'

/** '*' = generator ou async */
function* addToCart( {id} ) {
  /** yield = await */
  const productExist = yield select(
    state => state.cart.find(p => p.id === id)
  )

  if(productExist) {
    const amount = productExist.amount + 1
    yield put(updateAmount(id, amount))
  }
  else {
    const response = yield call(api.get, `/products/${id}`)
    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price)
    }

    yield put(addToCartSuccess(data))
  }
}

/** disparar notificacao */
export default all([
  /** acoes do redux que está ouvindo, qual ação disparar */
  takeLatest('@cart/ADD_REQUEST', addToCart),
])
