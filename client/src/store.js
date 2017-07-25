import { createStore, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'

import { routerMiddleware } from 'react-router-redux'

import rootReducer from './reducers/index'

const history = createHistory()

const middleware = routerMiddleware(history)

export {history}

const defaultState = {
  navigation: { 
    basketVisible: false,
    menuVisible: false,
    currentHoverDropdown: "",
    styling: "navigation",
    mensDropDownVisable: false,
    dropdownActive: false
  }
}

const store = createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(middleware))


export default store