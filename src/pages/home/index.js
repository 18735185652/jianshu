import React,{Component} from "react";
import Topic from "./components/Topic";
import Recommend from "./components/Recommend"
import List from "./components/List"
import Writer from "./components/Writer"
import {HomeWrapper,HomeLeft,HomeRight} from "./style"

export default class Home extends Component{
    render(){
        return(
                <HomeWrapper>
                    <HomeLeft>
                        <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4448/d9a0fd8f0622d2323161b68d2123c7f28837d28f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540 " alt=""/>
                        <Topic></Topic>
                        <List></List>

                    </HomeLeft>
                    <HomeRight>
                        <Recommend></Recommend>
                        <Writer></Writer>
                    </HomeRight>
                </HomeWrapper>
        )
    }
}
