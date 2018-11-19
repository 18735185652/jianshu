import {fromJS} from "immutable";
import * as actionTypes from "./actionTypes";
//immutable.js 不可改变的
const defaultState = fromJS({
    topicList:[],
    articleList:[],
    recommendList:[],
    articlePage:1,
    showScroll:false,
})

export default (state=defaultState,action) => {
    switch (action.type) {
        case actionTypes.CHANGE_HOME_DATA :
            return state.merge({
                topicList:fromJS(action.topicList),
                articleList:fromJS(action.articleList),
                recommendList:fromJS(action.recommendList)
            });
        case actionTypes.ADD_ARTICLE_LIST :
            return state.merge({
                "articleList":state.get("articleList").concat(action.list),
                "articlePage":action.nextPage
            });
        case actionTypes.TOGGLE_SCROLL_Top :
            return state.set("showScroll",action.show);
        default:
            return state;
    }

}
