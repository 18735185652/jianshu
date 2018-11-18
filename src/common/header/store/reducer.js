import * as actionTypes from "./actionTypes"
import {fromJS} from "immutable";

//immutable.js 不可改变的
const defaultState = fromJS({
    focused:false,
    mouseIn:false,
    list:[],
    page:1,
    totalPage:1
})
export default (state = defaultState,action) => {
    /* state里面的数据已经由fromJS修改为immutable对象（不可更改的数据），提交到reducer里面的值要修改必须用set方法 */
    /* set方法会结合之前immutable对象的值，和设置的值，返回一个全新的额对象 */
    switch (action.type) {
        case actionTypes.SEARCH_FOCUS :
            return  state.set("focused",true);
        case actionTypes.SEARCH_BLUR:
            return  state.set("focused",false);
        case actionTypes.CHANGE_LIST:
            return state.merge({
                list:action.data,
                totalPage:action.totalPage
            });
        case actionTypes.MOUSE_ENTER:
            return state.set("mouseIn",true);
        case actionTypes.MOUSE_LEAVE:
            return state.set("mouseIn",false);
        case actionTypes.CHANGE_PAGE:
            return state.set("page",action.page);
        default:
            return state;
    }
    
}