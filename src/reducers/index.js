import {combineReducers} from "redux";
import hkReducer from './hkreducer.js';
import CartReducer from './cartreducer.js';
import UserReducer from './userreducer.js';
let reducers=combineReducers({
    hk:hkReducer,
    cart:CartReducer,
    user:UserReducer,
});
export default reducers;