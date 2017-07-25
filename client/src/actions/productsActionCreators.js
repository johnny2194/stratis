import axios from 'axios'

export function fetchProducts() {
	return {
		type: 'FETCH_PRODUCTS',
		payload: axios.get('http://localhost:3000/api/products')
	}
}