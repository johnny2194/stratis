import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as productsActionCreators from '../actions/productsActionCreators'
import * as basketActionCreators from '../actions/basketActionCreators'
import * as navigationActionCreators from '../actions/navigationActionCreators'

import Navigation from '../components/Navigation'
import queryString from '../helpers/queryString'

class ProductView extends React.Component {
	componentDidMount() {
		const id = queryString.getId(this.props.location.search)
		this.props.fetchSingleProduct(id)
	}

	handleAddToBasket(){
		this.props.toggleBasket()
		this.props.addItemToBasket(this.props.current_product.stock_details[0].id)
	}

	createProductContainer() {
		const product = this.props.current_product
		if (product) {
			return (
				<div className="product-view-container">
					<img src={product.stock_details[0].image} alt="product image"/>
					<button onClick={this.handleAddToBasket.bind(this)}>Add to basket</button>
				</div>
			)
		} else {
			return ''
		}
	}

	render() {

		return (
			<div className="product-view">
				<Navigation styling="navigation navigation-invert" />
				{this.createProductContainer()}
			</div>
		)
	}
}

function mapStateToProps(state, router) {
	return Object.assign({}, state.products, router)
}

function mapDispatchToProps(dispatch) {
	const actionCreators = Object.assign({}, basketActionCreators, productsActionCreators, navigationActionCreators)
	return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductView)