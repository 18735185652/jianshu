import {fromJS} from "immutable";
import {GET_DETAIL_STATE} from "./actionTypes";


const defaultState = fromJS({
    title:"",
    content:``
})
export default (state=defaultState,action) => {
    switch (action.type) {
        case GET_DETAIL_STATE:
            console.log(action.title)
            return state.merge({
                title:fromJS(action.title),
                content:fromJS(action.data)
            });
        default:
            return state;
    }

}
