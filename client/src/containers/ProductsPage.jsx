import React from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../actions/productsActionCreators'
import {bindActionCreators} from 'redux'

import store from '../store'


import Navigation from '../components/Navigation'
import FilterBar from '../components/FilterBar'
import ProductsList from '../components/ProductsList'


class ProductsPage extends React.Component {

	componentDidMount() {
		this.props.fetchProducts()
	}

	render() {
		return (
			<div className="products-page">
      	{/*<Navigation initialStyling="navigation navigation-invert"/>*/}
      	<div className="products-container">
	      	<FilterBar />
	      	<ProductsList />
      	</div>
      </div>
		)
	}
}

// this is taking the navigation portion of state and attaching it to the Navigation's props
function mapStateToProps(state, routing) {
  return Object.assign({}, state.products, routing)
}

// this is attaching our actions to the Navigation component
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage)