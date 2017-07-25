import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import navigation from './navigation'
import products from './products'

const rootReducer = combineReducers({navigation, products, routing:routerReducer})

export default rootReducer