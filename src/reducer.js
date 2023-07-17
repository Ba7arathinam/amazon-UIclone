// initial value of your state
export const initialState = {
  basket: [
    // {
    //   id: "999999",
    //   title: "Marudhupandiyan Readys To Flying Dubai",
    //   price: 99.9,
    //   rating: 5,
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLiV0vjdIt1oPtrVWLGQ0FGcF_73sKJ4b30g&usqp=CAU",
    // },
    // {
    //   id: "999999",
    //   title: "Marudhupandiyan Ready To Flying Dubai",
    //   price: 99.9,
    //   rating: 5,
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLiV0vjdIt1oPtrVWLGQ0FGcF_73sKJ4b30g&usqp=CAU",
    // },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return { ...state, basket: [...state.basket, action.item] };

    //...state.basket meaning whatever inside of array + action.item to push this state

    case 'REMOVE_FROM_BASKET':
      // your balance checkout items
      let newBasket = [...state.basket];

      // we check to see if product exists
      // if exist to check the remove item index and check basketitem id and your action id equal to same if same your item will be removed else you can't remove
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        //item exists remove this item in your actions
        newBasket.splice(index, 1);
      } else {
        console.warn(`can't remove item (id: ${action.id} as it's item)`);
      }

      // finally return balance item your checkout page
      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
}

export default reducer;
