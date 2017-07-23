import React from 'react'

class FeaturedSquareAd extends React.Component {
	render() {
		return (
			<div className="featured-square-ad">
          <div></div>
         <ul>
           <li>Brand</li>
           <li>Name</li>
           <li>Type</li>
           <li>Sizes</li>
           <li>Price</li>
         </ul>
         <img src={this.props.image}></img>
      </div>
		)
	}
}

export default FeaturedSquareAd