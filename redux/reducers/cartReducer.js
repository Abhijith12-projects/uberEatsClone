const initialState = {
  selectedItems: {items: [], restaurantName: ''},
};

const cartReducer = (state = initialState, action) => {
  console.log(action.payload, 'payload');
  switch (action.type) {
    case 'ADD_TO_CART': {
      let newState = {...state};
      if (action.payload.checkboxValue) {
        newState.selectedItems = {
          items: [...newState.selectedItems.items, action.payload],
          restaurantName: action.payload.restaurantName,
        };
      } else {
        newState.selectedItems = {
          items: newState.selectedItems.items.filter(
            item => item.title !== action.payload.title,
          ),
          restaurantName: action.payload.restaurantName,
        };
      }

      console.log(newState, '+++++');
      return newState;
    }
    default:
      return state;
  }
};

export default cartReducer;
