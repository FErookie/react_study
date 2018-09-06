//样式表没有组件的作用域的概念

import React from 'react'
import CommentItem from '@/commentListChildren'
import cssobj from "@/../src/stylesheet/cmtList.scss"
console.log(cssobj);
class CmtList extends React.Component{
    constructor(){
        super();
        this.state = {
            "commentlist_data" : [
                {id : 5 , user : "王五"},
                {id : 6 , user : "年后"},
                {id : 7 , user : "你好"},
                {id : 8 , user : "呵呵"}
            ]
        }
    }
    render(){
        return <div><div className={cssobj.title}>这是评论列表组件</div>{this.state.commentlist_data.map(item => <CommentItem {...item} key={item.id}></CommentItem>)}</div>
    }
}
export default CmtList;