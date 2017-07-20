/*
* 受控组件和非受控组件
*   是否受状态控制
* */

import React from "react";
import ReactDOM from "react-dom";

class Form extends React.Component{
    constructor(){
        super();
        this.state = {username:"zhangsan"};
    }
    handle(e){
        this.setState({
            username:e.target.value
        })
    }
    render(){
        return (
            <form>
                <input type="text" value={this.state.username} onChange={e=>this.handle(e)}/>
            </form>
        )
    }
}

ReactDOM.render(
    <Form/>,
    document.querySelector("#root")
);