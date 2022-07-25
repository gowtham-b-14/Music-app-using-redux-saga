import { combineReducers } from "redux";
import Reducer from "./Reducer";
import Namereducer from "./Namereducer"
import Data_reducer from "./Data_reducer";

let root_reducer=combineReducers({
    Reducer,Namereducer, Data_reducer
})

export default root_reducer;