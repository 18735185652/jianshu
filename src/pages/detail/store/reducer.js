import {fromJS} from "immutable";
import * as actionTypes from "./actionTypes";

const defaultState = fromJS({
    title:"太原理工大学，被外地人占领的高考工厂",
    content:`<img src="//upload.jianshu.io/admin_banners/web_images/4448/d9a0fd8f0622d2323161b68d2123c7f28837d28f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
    <p><b>2018年,衡水中学考上清华北大的人数是176人</b>，2016年是139人。但是在这些辉煌的名单背后，却是外地来衡水上学人数暴涨，本地人则少了许多。但是在这些辉煌的名单背后，却是外地来衡水上学人数暴涨，本地人则少了许多</p>
    <p>2018年,衡水中学考上清华北大的人数是176人，2016年是139人。但是在这些辉煌的名单背后，却是外地来衡水上学人数暴涨，本地人则少了许多。但是在这些辉煌的名单背后，却是外地来衡水上学人数暴涨，本地人则少了许多</p>
    <p>2018年,衡水中学考上清华北大的人数是176人，2016年是139人。但是在这些辉煌的名单背后，却是外地来衡水上学人数暴涨，本地人则少了许多。但是在这些辉煌的名单背后，却是外地来衡水上学人数暴涨，本地人则少了许多</p>
    <p>2018年,衡水中学考上清华北大的人数是176人，2016年是139人。但是在这些辉煌的名单背后，却是外地来衡水上学人数暴涨，本地人则少了许多。但是在这些辉煌的名单背后，却是外地来衡水上学人数暴涨，本地人则少了许多</p>`
})
export default (state=defaultState,action) => {
    switch (action.type) {
        default:
            return state;
    }

}
