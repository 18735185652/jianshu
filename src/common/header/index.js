import React,{Component} from "react";
import {connect} from "react-redux"
import  {actionCreators}  from "./store";
import {CSSTransition} from "react-transition-group"
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from "./style";

class Header extends Component{

     getListArea = ()=>{
        const {
                focused,
                list,
                page,
                totalPage,
                handleMouseEnter,
                handleMouseLeave,
                mouseIn,
                handleChangePage,

        } = this.props;
        const pageList = [];
        const newList = list.toJS();
        if(newList.length){
            for(let i = (page - 1)*10;i<page*10;i++){
                pageList.push(<SearchInfoItem key={i} > {newList[i]} </SearchInfoItem>)
            }
        }
        if(mouseIn||focused){
            return (
                <SearchInfo
                    onMouseEnter = {handleMouseEnter}
                    onMouseLeave = {handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={()=>{handleChangePage(page,totalPage,this.spinIcon)}}>
                            <i className="iconfont spin" ref={(icon)=>{this.spinIcon = icon}}>&#xe65e;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }
    render(){
         const {focused,handleInputFocus,handleInputBlur,list} = this.props;
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? "focused" :""}
                                onFocus={()=>handleInputFocus(list)}
                                onBlur = {handleInputBlur}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <i className={focused?"iconfont zoom focused": 'iconfont zoom'}>&#xe624;</i>
                        {this.getListArea()}
                    </SearchWrapper>

                </Nav>
                <Addition>
                    <Button className="writting">
                        <i className="iconfont">&#xe61b;</i>
                        写文章
                    </Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}



const mapStateToProps = (state)=>{
     return {
         focused:state.getIn(["header","focused"]),
         list:state.getIn(["header","list"]),
         page:state.getIn(["header","page"]),
         mouseIn:state.getIn(["header","mouseIn"]),
         totalPage:state.getIn(["header","totalPage"]),
            //state.get("header").get("focused")
     }
}
const mapDispatchToProps=(dispatch)=>{
     return {
         handleInputFocus(list){
             /*  优化请求 */
             list.size <= 0 && dispatch(actionCreators.getList())
             dispatch(actionCreators.searchFocus())
         },
         handleInputBlur(){
             dispatch(actionCreators.searchBlur())
         },
         handleMouseEnter(){
             dispatch(actionCreators.mouseEnter())
         },
         handleMouseLeave(){
             dispatch(actionCreators.mouseLeave())
         },
         handleChangePage(page,totalPage,spin){
             console.log(page,totalPage,spin)
             let originAngle = spin.style.transform.replace(/[^0-9]/ig,"");
             if(originAngle){
                 originAngle = parseInt(originAngle,10);
             }else{
                 originAngle=0;
             }
             spin.style.transform="rotate("+(originAngle+360)+"deg)"
             if(page < totalPage){
                 dispatch(actionCreators.changePage(page+1))
             }else{
                 dispatch(actionCreators.changePage(1));
             }

         }
     }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);