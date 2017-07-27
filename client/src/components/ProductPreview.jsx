import React from 'react'
import {Link} from 'react-router-dom'

class ProductPreview extends React.Component {
	render() {
		const {product, stock_details} = this.props
		return (
			<div className="product-preview">
				<Link className="products-links"to={`/product-view?id=${product.id}`}>
					<img src={stock_details[0].image} alt={product.name} />
				</Link>
				<Link to={`/product-view?id=${product.id}`}>
					<h3>{product.name}</h3>
				</Link>
			</div>
		)
	}
}

export default ProductPreview
