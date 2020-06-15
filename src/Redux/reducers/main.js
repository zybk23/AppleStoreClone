import {combineReducers} from "redux";
import {createStore} from "redux";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk"
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import orderListReducer from "./orderListReducer";




const rootReducer=combineReducers({
    productReducer,
    cartReducer,
    orderListReducer
});

export default function configureStore() {
    return createStore(rootReducer,applyMiddleware(thunk))
}
