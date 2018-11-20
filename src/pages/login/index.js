import React,{Component} from "react";
import { LoginWrapper, LoginBox, Input, Button } from './style';
import {connect} from "react-redux"
import {actionCreators} from "./store"
import {Redirect} from "react-router-dom"
 class Login extends Component {
    render(){
        const {loginState} = this.props;
       if(loginState){
           return <Redirect to="/"/>
       }else{
           return (
               <LoginWrapper>
                   <LoginBox>
                       <Input placeholder='账号'  innerRef={(x)=>{this.account = x}} />
                       <Input placeholder='密码' innerRef={(x)=>{this.password=x}} type='password'/>
                       <Button onClick={()=>{this.props.login(this.account,this.password)}}>登陆</Button>
                   </LoginBox>
               </LoginWrapper>
           )
       }
    }
}
const mapStateToProps = (state) => ({
    loginState:state.getIn(["login","login"])
})
const mapDispatchToProps = (dispatch)=>({
    login(account,password){
       dispatch( actionCreators.login(account.value,password.value))
    }
})


export default connect(mapStateToProps,mapDispatchToProps)(Login)