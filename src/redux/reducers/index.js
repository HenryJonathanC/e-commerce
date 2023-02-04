import { combineReducers } from "redux";
import { productsReducers, selectedProductsReducers } from "./productsReducers";

const reducers = combineReducers({
    allProducts: productsReducers,
    product: selectedProductsReducers
})

export default reducers