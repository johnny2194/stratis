import React from 'react'
import Navigation from '../components/Navigation'
import FilterBar from '../components/FilterBar'
import ProductsList from '../components/ProductsList'


class ProductsPage extends React.Component {
	render() {
		return (
			<div>
      	<Navigation initialStyling="navigation navigation-invert"/>
      	<div className="products-container">
	      	<FilterBar />
	      	<ProductsList />
      	</div>
      </div>
		)
	}
}

export default ProductsPage