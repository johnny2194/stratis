function navigation(state = [], action) {
  switch(action.type) {
    case 'TOGGLE_BASKET':
      return Object.assign({}, state, {basketVisible: !state.basketVisible})
    case 'CHANGE_STYLING':
      return Object.assign({}, state, {styling: action.newStyling})
    default:
      return state
  }
}


export default navigation