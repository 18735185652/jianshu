import React,{Component} from "react";
import {connect} from "react-redux";
import * as actionCreators from "./store/actionCreators"
import {
    DetailWrapper,
    Header,
    Content
} from "./style"
 class Detail extends Component{
    render(){
        return(

            <div>
                <DetailWrapper>

                    <Header>{ this.props.title }</Header>
                    <Content dangerouslySetInnerHTML={{__html:this.props.content}} />
                </DetailWrapper>
            </div>
        )
    }
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id)
    }
}
const mapStateToProps = (state)=>({
    title:state.getIn(["detail","title"]),
    content:state.getIn(["detail","content"])
})
const mapDispatchToProps = (dispatch)=>({
    getDetail(id){
        dispatch(actionCreators.getDetailState(id))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Detail);
