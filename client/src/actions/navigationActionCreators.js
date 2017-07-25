//basket
export function toggleBasket() {
  return {
    type: "TOGGLE_BASKET"
  }
}

export function toggleMensDropDown() {
  return {
    type: "TOGGLE_DROPDOWN"
  }
}

export function showDropdown() {
  return {
    type: "SHOW_DROPDOWN"
  }
}

export function hideDropdown() {
  return {
    type: "HIDE_DROPDOWN"
  }
}

export function setCurrentDropdown(dropdownRef) {
  return {
    type: "SET_CURRENT_DROPDOWN",
    dropdownRef
  }
}

export function changeStyling(newStyling) {
  return {
    type: "CHANGE_STYLING",
    newStyling
  }
}