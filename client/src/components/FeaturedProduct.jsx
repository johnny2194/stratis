import React from 'react'

class FeaturedProduct extends React.Component {
	render() {
		return (
			<div className="featured-product">
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

export default FeaturedProduct