import React,{Component} from "react";
import {connect} from "react-redux"
import {
    TopocWrapper,
    TopicItem
} from "../style"

 class Topic extends Component{
    render(){
        let {list} = this.props;
        return(
            <TopocWrapper>
                {
                    list.map((item,index)=> (
                        <TopicItem key={item.get("id")}>
                            <img className="topic-pic" src={item.get("imgUrl")} alt=""/>
                            {item.get("title")}
                        </TopicItem>
                        )
                    )
                }
            </TopocWrapper>
        )
    }
}
const mapState=(state)=>({
    list:state.getIn(["home","topicList"])
})

export default connect(mapState,null)(Topic);