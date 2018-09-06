import React from 'react'
export default class InputBind extends React.Component{
    constructor(){
        super();
        this.state = {
            msg : '请输入'
        }
    }
    handleChange = (event)=>{
        this.setState({
            msg : event.target.value
        })
        console.log(this.refs.txt.value)//可以通过引用拿到值
    }
    render(){
        return <div><input value = {this.state.msg} onChange={this.handleChange} ref="txt"/><h1>{this.state.msg}</h1></div>
    }//ref来设置引用
}