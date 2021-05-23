import {createStore, combineReducers} from 'redux';
import products from './products-reducer.js'
import categories from './categories-reducer.js'
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({categories, products});

const store = () => {
    return createStore(reducers, composeWithDevTools())
}

export default store();