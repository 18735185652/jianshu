import styled from "styled-components";

export const HomeWrapper = styled.div`
    width: 960px;
    margin:0 auto;
    height: auto;
    overflow: hidden;
`
export const HomeLeft = styled.div`
    float: left;
    width: 625px;
    margin-left: 15px;
    padding-top:30px;
    .banner-img{
      width: 625px;
      height: 270px;
    }
`
export const HomeRight = styled.div`
    width: 280px;
    float:right;
    margin:0 auto;
    height: 300px;
    //background-color:#ccc;
   
`

export const TopocWrapper = styled.div`
    overflow: hidden;
    padding:20px 0 10px 0;
    margin-left: -10px;
    border-bottom: 1px solid #dcdcdc;
    
    //background-color:red;
`
export const TopicItem = styled.div`
   float:left;
   padding-right:10px;
   margin-left: 16px;
   background-color:#f7f7f7;
   height: 32px;
   line-height: 32px;
   font-size: 14px;
   margin-bottom:18px;
   color: #000;
   border:1px solid #dcdcdc;
   border-radius: 4px;
  .topic-pic{
    display: block;
    float:left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`


export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic{
    width: 125px;
    height: 100px;
    display: block;
    float: right;
    border-radius: 10px;
  }
`

export const ListInfo = styled.div`
   width: 500px;
   float:left;
   .title{
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    color:#333;
   }
   .desc{
    font-size: 13px;
    color:#999;
    line-height: 24px;
    
   }


`
export const RecommendWrapper = styled.div`
 padding-top:26px;
  width: 280px;  
  height:auto;
  
`
export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  margin-bottom:6px;
  background:url(${(props)=>props.imgUrl});
  background-size: contain;
`

