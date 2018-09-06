import React from 'react';
import ReactDOM from 'react-dom'
//绑定事件并且在事件中使用this.setState()的标准格式
//我们绑定数据到文本框的时候一定要使用onchange 否则将会成为一个read only filed
export default class Bindevent extends React.Component{
    constructor(){
        super();
        this.state = {
            'msg' : 'hiahia'
        };
    }
    render(){
        return <div>
            <button onClick={()=>{this.show('🐷')}} className="btn btn-primary">点击来触发事件</button>
            <input style={{width:"500px"}} value={this.state.msg} onChange={(event)=>this.txtChange(event)}/>
        </div>
    }
    //单项数据绑定我们像上面一样使用就可以 对于双向绑定react本身并没有机制 需要程序员手动监听onchange事件来拿到最新的值 再次使用setState来改变内部的值
    txtChange = (event)=>{
        console.log("this has been changed");
        console.log(event.target.value);

    }//event 方法通过事件的绑定来完成我们的使用
    async show(arg){
        alert("this is running" + arg + this.state.msg)
        if(this.state.msg === 'hiahia') {
            await this.setState({msg: 'woc'});//注意this.setState()方法的执行是异步的 我们使用回调函数来得到最新的值或者使用promise async/await都可以解决这个问题
        }else{
            await this.setState({msg: 'emmmmmmm'});//值得一提的是这里不会有覆盖现象所以放心的按需更新吧
        }
        console.log(this.state.msg);
    }

}
