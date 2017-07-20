/*
 * 这个文件是入口文件
 * React应用只会读取此index.js文件以及它依赖的模块
 * */

// 引入react
import React from "react";
import ReactDOM from "react-dom";

// 使用ReactDOM的render方法把React元素渲染到页面上去
// jsx = javascriptXML
// React 本质上还是一个库 会提供一些方法让我们来调用
ReactDOM.render(
    <h1>hallo1</h1>,// 虚拟dom
    document.querySelector("#root")
);