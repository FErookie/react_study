import bootcss from 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Hello from '@/Hello'
import Chat from '@/class_key_components'
import CmtList from "@/commentList"
import Bindevent from "@/Bindevent"
import InputBind from '@/input_bind'
console.log(bootcss);
const user = {
    name:"大黄",
    age:3,
    gender:"雄"
}
//创建组件的第一种方法 这是组件和render相同
// 在形参列表中接收 之后吧内容.出来 不管是vue还是react 组件中的props永远都是只读的 所以说不要试图去改造props中的内容
//构造函数特点 首字母是大写的 里面没写全会报nothing is return 注意组件的首字母一定是大写的 这样在渲染时可以被当作组件而不是普通的标签
//-------------------------------------------------------------------------------------------
//把组件用标签形式写在这里
ReactDOM.render(<div>
    123<Hello {...user}></Hello>
    <Chat {...user}></Chat>
    <CmtList></CmtList>
    <button className="btn btn-primary">你好</button>
    <Bindevent/>
    <InputBind/>
</div> , document.getElementById('app'));