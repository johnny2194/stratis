import React from 'react'
import Navigation from '../components/Navigation'
import FilterBar from '../components/FilterBar'
import ProductsList from '../components/ProductsList'


class TestPage extends React.Component {
	render() {
		return (
			<div className="test-page">
      	<Navigation initialStyling="navigation navigation-invert"/>
      	<div className="products-container">
	      	<FilterBar />
	      	<ProductsList />
      	</div>
      </div>
		)
	}
}

export default TestPage