import {fromJS} from "immutable";
import {actionTypes} from "./index"
//immutable.js 不可改变的
const defaultState=fromJS({
    topicList:[],
    articleList:[],
    recommendList:[]
})

export default (state=defaultState,action)=>{
    switch (action.type) {

        case actionTypes.CHANGE_HOME_DATA :
            return state.merge({
                topicList:fromJS(action.topicList),
                articleList:fromJS(action.articleList),
                recommendList:fromJS(action.recommendList)
            })
        default:
            return state;
    }

}
