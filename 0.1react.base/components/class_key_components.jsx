//第二种创建组件的方式 使用 class关键字
import React from 'react'
import ReactDOM from 'react-dom'
//class 面向对象编程 但是本质还收回到原型链去模拟 React 规定的有状态组件只能这样启用 当然无状态的组件使用的使构造函数形式
//我们把属性直接挂给构造函数直接使用构造函数直接。出来叫做静态属性 在使用class内部四我们使其经这个层次的info直接与构造器constructor平级
class Chat extends React.Component{
    constructor(){
        super();
        this.state = {
            msg : "hello bill"

        }
    }
    render(){
        return <div className="title">你好{this.props.name}{this.state.msg}</div>
    }
}
export default Chat;