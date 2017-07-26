import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import navigation from './navigation'
import products from './products'
import auth from './auth'

const rootReducer = combineReducers({navigation, products, auth, routing:routerReducer})

export default rootReducer