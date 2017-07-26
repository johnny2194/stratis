import React from 'react'

import { render } from 'react-dom'

// import css
import css from './styles/style.scss'

// import components
import Navigation from './components/Navigation'
import LandingPage from './containers/LandingPage'
import ProductsPage from './containers/ProductsPage'
import LoginPage from './containers/LoginPage'
import TestPage from './containers/TestPage'
import SignupPage from './containers/SignupPage'
import ProfilePage from './containers/ProfilePage'

// import react router deps
import { Router, Route } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import {Provider} from 'react-redux'
import store, { history } from './store'



const router = (
  <Provider store={store}>
		<Router history={history}>
			<div>
				<Route exact path="/" component={LandingPage} />
				<Route path="/products" component={ProductsPage} />
        <Route path="/login" component={LoginPage} />
				<Route path="/test" component={TestPage} />
				<Route path="/signup" component={SignupPage}/>
				<Route path="/profile" component={ProfilePage}/>
			</div>
		</Router>
  </Provider>
)

render(router, document.getElementById('app'))