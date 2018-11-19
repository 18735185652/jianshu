import React,{Component} from "react";
import {Link} from "react-router-dom"
import {connect} from "react-redux"

import {
    ListItem,
    ListInfo,
    LoadMore,
} from "../style";
 import {actionCreators} from "../store"
class List extends Component{
    render(){
        const list = this.props;
        return(
           <div>
               {
                   list.articleList.map((item,index)=>(
                   <Link key={index} to={"/detail/"+item.get("id")}>
                       <ListItem >
                            <img className="pic" src={item.get("imgUrl")} alt=""/>
                           <ListInfo>
                               <h3 className="title">{item.get("title")}</h3>
                               <p className="desc">{item.get("desc")}</p>
                           </ListInfo>
                       </ListItem>
                   </Link>
                    )
                   )
               }
               <LoadMore onClick={()=>{this.props.getMoreList(list.page)}}>更多文字</LoadMore>
           </div>
        )
    }

}
const mapState=(state)=>({
    articleList:state.getIn(["home","articleList"]),
    page:state.getIn(["home","articlePage"])
})
const mapDispatch=(dispatch)=>({
    getMoreList(page){
        dispatch(actionCreators.getMoreList(page))
    }
})

export default connect(mapState,mapDispatch)(List);