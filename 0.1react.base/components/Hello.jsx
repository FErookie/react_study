import React from 'react'
function Hello(props) {
    console.log(props);
    return <div>
        这这是一个简单的分离出来的jsx组件文件
        <h1>我觉得我打字慢十分影响我的代码体验{props.name}</h1>
    </div>
}
//把组件暴露出去
export default Hello
