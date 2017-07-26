function products(state = [], action) {
  switch(action.type) {
  	case 'FETCH_PRODUCTS_PENDING':
  		return Object.assign({}, state, { fetching: true })
  	case 'FETCH_PRODUCTS_REJECTED':
  		return Object.assign({}, state, { fetching: true, error: action.payload })
  	case 'FETCH_PRODUCTS_FULFILLED':
  		return Object.assign({}, state, { fetching: false, fetched: true, products: action.payload.data })
    case 'FETCH_SINGLE_PRODUCT_PENDING':
      return Object.assign({}, state, { fetching: true })
    case 'FETCH_SINGLE_PRODUCT_REJECTED':
      return Object.assign({}, state, { fetching: true, error: action.payload })
    case 'FETCH_SINGLE_PRODUCT_FULFILLED':
      return Object.assign({}, state, { fetching: false, fetched: true, current_product: action.payload.data })
    default:
      return state
  }
}


export default products