/*
* 如何修改ui 做一个时钟的例子
* */
import React from "react";
import ReactDOM from "react-dom";

function tick() {
    let clock = <div>当前时间:{new Date().toLocaleString()}</div>;
    // dom diff 每次重新渲染的时候会重新比较虚拟dom的差异 只更新差异的部分
    ReactDOM.render(
        clock,
        document.querySelector("#root")
    )
}
tick();
setInterval(tick,1000);