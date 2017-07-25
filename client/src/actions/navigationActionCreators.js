//basket
export function toggleBasket() {
  return {
    type: "TOGGLE_BASKET"
  }
}

export function changeStyling(newStyling) {
  return {
    type: "CHANGE_STYLING",
    newStyling
  }
}