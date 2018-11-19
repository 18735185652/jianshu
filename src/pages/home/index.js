import React,{Component} from "react";
import Topic from "./components/Topic";
import Recommend from "./components/Recommend"
import List from "./components/List"
import Writer from "./components/Writer"
import {HomeWrapper,HomeLeft,HomeRight,BackTop} from "./style";
import {connect} from "react-redux"
import {actionCreators} from "./store"


 class Home extends Component{
     handleScrollTio = ()=>{
         window.scrollTo(0,0);
     }
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
                    {
                        this.props.scrollShow?<BackTop onClick={this.handleScrollTio}>顶部</BackTop>:null
                    }
                </HomeWrapper>
        )
    }
       componentDidMount (){
            this.props.changeHomeData();
            this.bindEvents()
        }
     bindEvents=()=>{
         window.addEventListener("scroll",this.props.changeScrollTopShow)
     }
}
const mapStateToProps=(state)=>({
    scrollShow:state.getIn(["home","showScroll"])
})
const mapDispatch =(dispatch)=>({
    changeHomeData(){
        dispatch(actionCreators.getHomeInfo())
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop>400){
            dispatch(actionCreators.toggleTopShow(true))
        }else{
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
})
export default connect(mapStateToProps,mapDispatch)(Home)
