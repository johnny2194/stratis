import React from 'react'

class ProductBasketPreview extends React.Component {
	render() {
		return (
			<div className="product-basket-preview">
         
         <img src={this.props.image}></img>
         <div className="details-container">
          <p className="product-name">Product Name</p>
          <p className="order-details">Blue, M, QTY: 1</p>
         </div>
         <div className="price-container">
           <p className="discount-price">£210</p>
           <p className="full-price">£300</p>
        </div>
      </div>
		)
	}
}

export default ProductBasketPreview