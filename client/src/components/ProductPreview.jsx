import React from 'react'
import {Link} from 'react-router-dom'

class ProductPreview extends React.Component {
	render() {
		const {product, stock_details} = this.props
		return (
			<div className="product-preview">
				<Link to={`/product-view?id=${product.id}`}>
					<h3>{product.name}</h3>
				</Link>
				<Link to={`/product-view?id=${product.id}`}>
					<img src={stock_details.image} alt={product.name} />
				</Link>
			</div>
		)
	}
}

export default ProductPreview
