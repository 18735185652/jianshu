import axios from "axios";

import {GET_DETAIL_STATE} from "./actionTypes";
const initDetail = (result)=>({
    type:GET_DETAIL_STATE,
    data:result.content,
    title:result.title
})
export const getDetailState = ()=>{
    return (dispatch)=>{
        axios.get("/api/detail.json").then((res)=>{
            const result = res.data.data;
            dispatch(initDetail(result))
        })
    }

}