import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './module/rootReducer'
import rootSaga from './module/rootSaga'

const sagaMiddleware = createSagaMiddleware()
const enhancer = applyMiddleware(sagaMiddleware)
const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga)

export default store
