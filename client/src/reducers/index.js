import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import navigation from './navigation'
import products from './products'
import auth from './auth'
import basket from './basket'

const rootReducer = combineReducers({navigation, products, auth, basket, routing:routerReducer})

export default rootReducer