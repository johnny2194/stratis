function navigation(state = [], action) {
  switch(action.type) {
    case 'SET_CURRENT_DROPDOWN':
      return Object.assign({}, state, {currentHoverDropdown: action.dropdownRef})
    case 'SHOW_DROPDOWN':
      return Object.assign({}, state, {dropdownActive: true})
    case 'HIDE_DROPDOWN':
      return Object.assign({}, state, {dropdownActive: false})
    case 'TOGGLE_BASKET':
      return Object.assign({}, state, {basketVisible: !state.basketVisible})
    case 'TOGGLE_MENS':
      return Object.assign({}, state, {mensDropDownVisible: !state.mensDropDownVisible})  
    case 'CHANGE_STYLING':
      return Object.assign({}, state, {styling: action.newStyling})
    default:
      return state
  }
}


export default navigation