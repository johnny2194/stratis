function navigation(state = [], action) {
  switch(action.type) {
    case 'TOGGLE_BASKET':
      return Object.assign({}, state, {basketVisible: !state.basketVisible})
    default:
      console.log(action)
      return state
  }
}


export default navigation