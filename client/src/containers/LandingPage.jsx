import React from 'react'
import FeaturedProduct from '../components/FeaturedProduct'

class LandingPage extends React.Component {
	render() {
		return (
      <div className="landing-page-wrapper">
  			<div className="hero">
          <span></span>
          <div>Sale is on!</div> 
        </div>
        <div className="product-strip">
          <FeaturedProduct image="/images/burton1.png"></FeaturedProduct>
          <FeaturedProduct image="/images/moment2.png"></FeaturedProduct>
          <FeaturedProduct image="/images/burton2.png"></FeaturedProduct>
          <FeaturedProduct image="/images/moment1.png"></FeaturedProduct>
        </div>
      </div>
		)
	}
}

export default LandingPage