
let initalState = {
    categories: [
        {  name: 'food', displayName: 'Food', description: 'Healthy Food'   },
         
        { name: 'electronics',  displayName: 'Electronics', description: 'new electronics', },
    ],
    activeCategories: '',
};

const categories = (state = initalState, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'ACTIVE':
            return { ...state, payload };
        default:
            return state;
    }
};

export default categories;

export const active = (name) => {
    return {
        type: 'ACTIVE',
        payload: name,
    };
};