/*
* 我们可以把一个页面分成若干的部分 每个部分都会成为一个组件
* 组件可复用 可组合 可维护
* 定义组件有两种方式
* 1. 函数式 通过函数的方式定义组件 接收一个props属性对象作为参数 返回React元素 首字母必须大写
* 2.
* */
import React from "react";
import ReactDOM from "react-dom";

function Welcome(props) {
    return <div style={{color:props.color}}>{props.name}</div>
}

// 当使用组件的时候和使用React元素用法基本一样
// 把组件的属性包装成对象{name:"wyk"} 作为参数传递给函数
// 函数会返回一个React元素 render方法会把此React元素渲染到页面中
ReactDOM.render(
    <Welcome name="wyk" color="red"/>,
    document.querySelector("#root")
);