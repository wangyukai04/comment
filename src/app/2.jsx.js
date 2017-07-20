/*
* 1.在jsx嵌套表达式
*  什么是表达式? 一些变量和一些操作符的混合 表达式一定要有返回值
*
* */
import React from "react";
import ReactDOM from "react-dom";

const user = {
    firstName:"first",
    lastName:"last"
};

function formatUser(user) {
    return user.firstName + user.lastName;
}

/**
 * 因为这里的React元素并不是真实的dom元素
 * 1/比如增加类名 需要增加className属性
 * 2.要增加行内样式 传如对象 属性名按js属性命名
 */
let style = {width:"200px",height:"100px",borderRadius:"30px",background:"orange",textAlign:"center",lineHeight:"100px",margin:"0 auto"};
let hello = <h1 style={style} className="red">{formatUser(user)}</h1>;
ReactDOM.render(
    hello,
    document.querySelector("#root")
);

// React 元素会经过jsx编译器的转义 转义后其实就是一个js对象
// <h1>hello</h1> ==> React.createElement("h1",null,"hello")