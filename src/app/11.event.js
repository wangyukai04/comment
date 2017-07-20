/*
* 表单提交
* */
import React from "react";
import ReactDOM from "react-dom";

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={username:'',password:''};
        this.handle = this.handle.bind(this);
    }
    handle(e){
        e.preventDefault();
        console.log(this.refs.password.value)
    }
    render(){
        // ref=reference 引用名 可以通过这个引用名得到这个input框的真实dom
        // ref=函数 当此React元素转成真实的dom元素并插入到页面中之后 会执行此箭头函数 ref就是真实的dom元素
        return(
        <form onSubmit={this.handle}>
            <div><label htmlFor="username">用户名</label><input ref="username" id="username" type="text" required={true}/></div>
            <div><label htmlFor="password">密码</label><input ref={ref=>this.refs.password=ref} id="password" type="text" required={true}/></div>
            <div>
                <button type="submit">提交</button></div>
        </form>
        )
    }
}

ReactDOM.render(
    <Form/>,
    document.querySelector("#root")
);