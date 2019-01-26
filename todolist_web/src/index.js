import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './component/TodoList.js';
//https 服务器 第二次访问即使是在断网的状况下 完成PWA 效果
ReactDOM.render(<div>
    <TodoList/>
</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// entry port
//react 强调我们不需要手动的更改dom 而是更改数据的值    进而react将会响应式的更改页面
