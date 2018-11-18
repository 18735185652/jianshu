import axios from "axios";
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