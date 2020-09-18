import { all, call, put, takeLatest } from 'redux-saga/effects'

import api from '../../../service/api'
import {addToCartSuccess} from './action'

/** '*' = generator ou async */
function* addToCart( {id} ) {
  /** yield = await */
  const response = yield call(api.get, `/products/${id}`)
  yield put(addToCartSuccess(response.data))
}

/** disparar notificacao */
export default all([
  /** acoes do redux que está ouvindo, qual ação disparar */
  takeLatest('@cart/ADD_REQUEST', addToCart),
])
