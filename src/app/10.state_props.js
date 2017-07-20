/*
* 定义一个组件的时候 属性+状态
* 属性是由父附件传入的
* 状态是一个组件内部的变量  只能由组件内部初始化  也只能由组件内部改变
* 数据流向是单向的  父==>子
* */

import React from "react";
import ReactDOM from "react-dom";

class Person extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mind:true
        }
    }
    handleClick=()=>{
        // 如果原始状态中有很多属性 那么调用setState设置的属性 会合并到原始的状态中
        this.setState({
            mind:!this.state.mind})
    };
    // render方法的返回值 描述了组件的模样
    render(){
        let mind = this.state.mind?"哈哈":"呵呵";
        return <h1>{this.props.name}
            <span>{mind}</span>
            <button onClick={this.handleClick}>改变</button>
        </h1>
    }
}
/*
* 1.把属性封装成一个对象{name:"wyk}
* 2.实例化Person 调用它的render方法返回React元素
* */
ReactDOM.render(
    <Person name="wyk"/>,
    document.querySelector("#root")
);