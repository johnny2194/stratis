import axios from 'axios'

export function fetchProducts() {
	return {
		type: 'FETCH_PRODUCTS',
		payload: axios.get('http://localhost:3000/api/products')
	}
}

export function fetchSingleProduct(id) {
	return {
		type: 'FETCH_SINGLE_PRODUCT',
		payload: axios.get(`http://localhost:3000/api/products/${id}`)
	}
}

export function setProductsFilter(filter) {
	return {
		type: 'SET_PRODUCTS_FILTER',
		filter
	}
}

