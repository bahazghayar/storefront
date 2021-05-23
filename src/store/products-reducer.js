let initalState = {
  products: [
    // FOOD
    { name: 'Chicken', category: 'food', price: '5$', image: '' },

    { name: 'Meat', category: 'food', price: '10$', image: '' },

    { name: 'Fish', category: 'food', price: '7$', image: '' },

    // ELECTRONICS
    { name: 'Laptop', category: 'electronics', price: '800$', image: '' },

    { name: 'Mobile', category: 'electronics', price: '500$', image: '' },

    { name: 'Tablet', category: 'electronics', price: '300$', image: '' },
  ],
  filetredProduct: [],
};

const products = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {

    case 'ACTIVE':
      const filetredProduct = state.products.filter((product) =>
        product.category === payload ? product.category : null
      );
      return { ...state, filetredProduct };
    default:
      return state;
  }
};

export default products;