import React from "react";
import ReactDOM from "react-dom";

/*
* 1.绑定事件的名称用驼峰命名法
* 2.绑定的函数中的this默认指向null bind或者()=>{}
* */
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {count:0}
    }
    handleClick=()=>{
        // 若为普通函数 this为null 箭头函数 this为实例
        this.setState({
            count:this.state.count+1
    })
    };
    render(){
        return <div>
            <p>{this.state.count}</p>
            {/*<button onClick={this.handleClick.bind(this)}>+</button>*/}
            <button onClick={this.handleClick}>+</button>
        </div>
    }
}

ReactDOM.render(
    <Counter/>,
    document.querySelector("#root")
)