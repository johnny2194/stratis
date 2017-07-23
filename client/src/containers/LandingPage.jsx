import React from 'react'
import FeaturedProduct from '../components/FeaturedProduct'
import FeaturedSquareAd from '../components/FeaturedSquareAd'

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
        <div className="square-ad-strip">
          <FeaturedSquareAd image="/images/snowbombing2.jpg"></FeaturedSquareAd>
          <FeaturedSquareAd image="/images/snow2.png"></FeaturedSquareAd>
        </div>
      </div>
		)
	}
}

export default LandingPage