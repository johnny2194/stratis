import React from 'react'
import * as actionCreators from '../actions/productsActionCreators'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'


import ProductPreview from './ProductPreview'

class ProductsList extends React.Component {

	componentDidMount() {
		this.props.fetchProducts()
	}

	render() {
		const {products} = this.props

		const stock_details = products.map((product) => {
			return product.stock_details
		})
		.reduce((a, b) => {
			return a.concat(b)
		}, [])
		console.log(stock_details)

		const productPreviews = stock_details.map((stock_details) => <ProductPreview key={stock_details.id} product={stock_details.product} stock_details={stock_details} />)

		return (
			<div className="products-list">
				{productPreviews}
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)