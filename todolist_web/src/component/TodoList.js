import React , {Component} from 'react';
import "antd/dist/antd.css";
import {Input , Button ,List} from 'antd';
import store from '../store'
class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.deleteSelf = this.deleteSelf.bind(this);
        this.handleKeydown = this.handleKeydown.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    render(){
        return(
            <div style={{marginTop : "10px" , marginLeft: "10px"}}>
                <div style={{marginBottom:"10px"}} onKeyDown={this.handleKeydown}>
                <Input
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                    placeholder="输入你的任务"
                    style={{width:"300px" , marginRight:"10px"}}
                />
                <Button type="primary" onClick={this.handleButtonClick}>提交</Button>
                </div>
                <List
                    style={{width:"300px"}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item , index) => (<List.Item onClick={this.deleteSelf.bind(this , index)}>{item}</List.Item>)}
                />
            </div>

        )
    }
    handleStoreChange(){
        this.setState(store.getState());
    }//太重要了.........
    handleInputChange(element){
        const action = {
            type : 'change_input_value',
            value : element.target.value
        };//组件先创建一个action
        store.dispatch(action);
    }
    deleteSelf(index){
        const action = {
            type : 'delete_todoitem',
            index : index
        };
        //alert(index);
        store.dispatch(action);
    }
    handleKeydown(e){
        if(e.keyCode === 13){
            this.handleButtonClick();
        }
    }
    handleButtonClick(){
        const action = {
            type : 'add_todoitem'
        };
        store.dispatch(action);//实际上现在是将action传给store的过程
    }
}
export default TodoList;