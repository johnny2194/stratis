import { createStore } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { createBrowserHistory } from 'history/createBrowserHistory'

import rootReducer from './reducers/index'

const browserHistory = createBrowserHistory()

const defaultState = {
  navigation: { 
    basketVisible: false,
    menuVisible: false,
    currentHoverDropdown: ""
  }
}

const store = createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const history = syncHistoryWithStore(browserHistory, store)

export default store