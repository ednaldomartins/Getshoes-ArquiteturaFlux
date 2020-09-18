import { all, call, put, select, takeLatest } from 'redux-saga/effects'
import {toast} from 'react-toastify'

import api from '../../../service/api'
import {formatPrice} from '../../../util/format'
import {addToCartSuccess, updateAmountSuccess} from './action'

/** '*' = generator ou async */
function* addToCart( {id} ) {
  /** yield = await */
  const productExist = yield select(
    state => state.cart.find(p => p.id === id)
  )

  const stock = yield call(api.get, `/stock/${id}`)
  const stockAmount = stock.data.amount
  const currentAmount = productExist ? productExist.amount : 0
  const amount = currentAmount + 1

  if(amount > stockAmount) {
    toast.error('Quantidade de itens solicitada acima do disponível no estoque.')
    return
  }

  if(productExist) {
    yield put(updateAmountSuccess(id, amount))
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
