import axios from 'axios'

export function addItemToBasket(itemId) {
	return {
		type: 'ADD_ITEM_TO_BASKET',
		payload: axios.get(`http://localhost:3000/api/stock_details/${itemId}`)
	}
}