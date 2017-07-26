function basket(state = [], action) {
	switch(action.type) {
		case 'ADD_ITEM_TO_BASKET_PENDING':
		  return Object.assign({}, state, { fetching: true })
		case 'ADD_ITEM_TO_BASKET_REJECTED':
		  return Object.assign({}, state, { fetching: true, error: action.payload })
		case 'ADD_ITEM_TO_BASKET_FULFILLED':
			console.log(action.payload)
			return Object.assign({}, state, { basket: [...state.basket, action.payload.data]})
		default:
			return state
	}
}

export default basket