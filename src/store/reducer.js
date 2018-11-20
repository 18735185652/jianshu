import {combineReducers} from "redux-immutable"

//combineReducers 把小reducer合并
import {reducer as headerReducer} from "../common/header/store";
import {reducer as homeReducer} from "../pages/home/store"
import {reducer as detailReducer} from "../pages/detail/store"
import {reducer as loginReducer} from "../pages/login/store"
export default combineReducers({
    header:headerReducer,
    home:homeReducer,
    detail:detailReducer,
    login:loginReducer
})