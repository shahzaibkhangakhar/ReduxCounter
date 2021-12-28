import Change from "./reducerindex";
import { combineReducers } from "redux";


//change is reducer # 01
//you can add all different reducer to combine here and this root reducer pass to the store
const RootReducer = combineReducers({
    Change,
})

export default RootReducer