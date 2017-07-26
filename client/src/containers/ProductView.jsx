import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actionCreators from '../actions/productsActionCreators'

import Navigation from '../components/Navigation'

class ProductView extends React.Component {
	componentDidMount() {
		const queryStringArray = this.props.location.search.replace('?', '').split('&')
		const queryObject = {}
		queryStringArray.forEach((queryString) => {
			const keyAndValue = queryString.split('=')
			queryObject[keyAndValue[0]] = Number(keyAndValue[1])
		})
		console.log(queryObject)
		this.props.fetchSingleProduct(queryObject.id)
	}

	render() {
		if (this.props.current_product) console.log(this.props.current_product)
		return (
			<div className="product-view">
				<Navigation />
				<div className="product-view-container"></div>
			</div>
		)
	}
}

function mapStateToProps(state, router) {
	return Object.assign({}, state.products, router)
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductView)