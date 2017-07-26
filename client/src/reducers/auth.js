

function auth(state = [], action) {
  switch(action.type) {
    case 'SIGNUP_POST_PENDING':
      return Object.assign({}, state, { fetching: true })
    case 'SIGNUP_POST_REJECTED':
      return Object.assign({}, state, { fetching: true, error: action.payload })
    case 'SIGNUP_POST_FULFILLED':
      return Object.assign({}, state, { fetching: false, fetched: true, user: action.payload.data })
    case 'LOGIN_POST_PENDING':
      return Object.assign({}, state, { fetching: true })
    case 'LOGIN_POST_REJECTED':
      return Object.assign({}, state, { fetching: true, error: action.payload })
    case 'LOGIN_POST_FULFILLED':
      return Object.assign({}, state, { fetching: false, fetched: true, user: action.payload.data })
    case 'CHECK_VALIDATION_PENDING':
      return Object.assign({}, state, { fetching: true })
    case 'CHECK_VALIDATION_REJECTED':
      return Object.assign({}, state, { fetching: true, error: action.payload })
    case 'CHECK_VALIDATION_FULFILLED':
      return Object.assign({}, state, { fetching: false, fetched: true, user: action.payload.data })  
    default:
      return state
  }
}


export default auth