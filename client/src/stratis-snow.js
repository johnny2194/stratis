import React from 'react'

import { render } from 'react-dom'

// import css
import css from './styles/style.scss'

// import components
import Navigation from './components/Navigation'
import LandingPage from './containers/LandingPage'
import ProductsPage from './containers/ProductsPage'
import LoginPage from './containers/LoginPage'

// import react router deps
import { Router, Route, IndexRoute } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

const router = (
		<Router history={history}>
			<div>
				<Route path="/" component={Navigation} />
				<Route exact path="/" component={LandingPage} />
				<Route path="/products" component={ProductsPage} />
				<Route path="/login" component={LoginPage} />
			</div>
		</Router>
)

render(router, document.getElementById('app'))