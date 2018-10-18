import {fromJS} from "immutable";

//immutable.js 不可改变的
const defaultState=fromJS({
   topicList:[{
       id:1,
       title:"社会热点",
       imgUrl:"//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
   },
   {
       id:2,
       title:"校园青春",
       imgUrl:"//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
   }
   ],
    articleList:[
        {
           id:1,
           title:"狼狈与潇洒：刘强东性侵门与马云隐退有玄机",
           desc:"京东掌门人刘强东的所谓“性侵门”仍如火如荼，令其备受煎熬；传言马云却要在今天宣布金盆洗手，退隐江湖，去做一名老师.",
           imgUrl:"//upload-images.jianshu.io/upload_images/10137120-3c70ee3d0424279b?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
        },
        {
            id:2,
            title:"狼狈与潇洒：刘强东性侵门与马云隐退有玄机",
            desc:"京东掌门人刘强东的所谓“性侵门”仍如火如荼，令其备受煎熬；传言马云却要在今天宣布金盆洗手，退隐江湖，去做一名老师.",
            imgUrl:"//upload-images.jianshu.io/upload_images/10137120-3c70ee3d0424279b?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
        },
        {
            id:3,
            title:"狼狈与潇洒：刘强东性侵门与马云隐退有玄机",
            desc:"京东掌门人刘强东的所谓“性侵门”仍如火如荼，令其备受煎熬；传言马云却要在今天宣布金盆洗手，退隐江湖，去做一名老师.",
            imgUrl:"//upload-images.jianshu.io/upload_images/10137120-3c70ee3d0424279b?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
        },
        {
            id:4,
            title:"狼狈与潇洒：刘强东性侵门与马云隐退有玄机",
            desc:"京东掌门人刘强东的所谓“性侵门”仍如火如荼，令其备受煎熬；传言马云却要在今天宣布金盆洗手，退隐江湖，去做一名老师.",
            imgUrl:"//upload-images.jianshu.io/upload_images/10137120-3c70ee3d0424279b?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
        }
    ],
    recommendList:[
        {
           id:"1",
           imgUrl:"https://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png"
         },
        {
            id:"2",
            imgUrl:"https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png"
        },
        {
            id:"3",
            imgUrl:"https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
        },
        {
            id:"4",
            imgUrl:"https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
        },
        {
            id:"5",
            imgUrl:"https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
        }
    ]
})

export default (state=defaultState,action)=>{
    switch (action.type) {
        default:
            return state;
    }

}
