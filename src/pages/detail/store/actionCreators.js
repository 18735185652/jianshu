import axios from "axios";
import {GET_DETAIL_STATE} from "./actionTypes"
const initDetail = {
    // actionInitDetail(result)({
    //     type:GET_DETAIL_STATE,
    //     data:result
    // })
}
export const getDetailState = ()=>{
    return ()=>{
        axios.get("/api/detail.json").then((res)=>{
            const result = res.data.data;

        })
    }

}