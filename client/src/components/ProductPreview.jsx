import React from 'react'

class ProductPreview extends React.Component {
	render() {
		const {product, stock_details} = this.props
		return (
			<div className="product-preview">
				<h3>{product.name}</h3>
				<img src={stock_details.image} alt={product.name} />
			</div>
		)
	}
}

export default ProductPreview
