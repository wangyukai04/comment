import React from "react";
import ReactDOM from "react-dom";

/*
* 只有在html标签中要嵌套表达式的时候才会需要用{}
* */
class Hello extends React.Component{
    render(){
        return this.props.count>0?<span>{this.props.count}</span>:null
    }
}

ReactDOM.render(
    <Hello count="123"/>,
    document.querySelector("#root")
)