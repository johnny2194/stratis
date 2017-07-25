import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import promiseMiddleware from 'redux-promise-middleware'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'


import rootReducer from './reducers/index'
const history = createHistory()
const routerStuff = routerMiddleware(history)

export {history}

const defaultState = {
  navigation: { 
    basketVisible: false,
    menuVisible: false,
    currentHoverDropdown: "",
    styling: "navigation"
  },
  products: {
  	fetching: false,
  	fetched: false,
  	list: [],
  	error: null
  }
}

const middleware = applyMiddleware(thunk, routerStuff, promiseMiddleware())

const store = createStore(rootReducer, defaultState, middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store