import axios from "axios";
import {fromJS} from "immutable"
import * as actionTypes from "./actionTypes";
export const getHomeInfo=()=>{
    return (dispatch) => {
        axios.get("/api/home.json").then((res)=>{
            const data = res.data.data;
            const action = {
                type:actionTypes.CHANGE_HOME_DATA,
                articleList:data.articleList,
                recommendList:data.recommendList,
                topicList:data.topicList
            }
            dispatch(action);
        })
    }
}
const addHomeList = (list,nextPage)=>({
    type:actionTypes.ADD_ARTICLE_LIST,
    list:fromJS(list),
    nextPage:nextPage
})
export const getMoreList=(page)=>{
    return (dispatch)=>{
        axios.get("/api/homeList.json?page="+page).then((res)=>{
            const result = res.data.data;
            dispatch(addHomeList(result,page+1))
        })
    }
}
export const toggleTopShow=(show)=>({
    type:actionTypes.TOGGLE_SCROLL_Top,
    show
})