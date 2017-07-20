import React from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component{
    constructor(){
        super();
        // 1-2.获取默认状态
        this.state = {
            count:0
        }
    }
    // 1-1.获得属性对象
    static defaultProps = {
        name:"计数器"
    };
    // 1-3.组件将要挂载
    componentWillMount(){

    }
    click = ()=>{
        this.setState({
            count:this.state.count+1
        })
    };
    killMySelf = ()=>{
      ReactDOM.unmountComponentAtNode(document.querySelector("#root"))
    };
    // 1-4.挂载
    render(){
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.state.count}</p>
                <button onClick={this.click}>+</button>
                <button onClick={this.killMySelf}>自杀</button>
            </div>
        )
    }
    // 1-5.挂载完成  组件进入运行期
    componentDidMount(){

    }
    // 2-1 询问组件是否需要更新
    shouldComponentUpdate(props,state){
        // 返回true 更新
        return true;
        // 返回false 不更新
    }
    // 2-1-1 组件将要更新
    componentWillUpdate(){

    }
    // 2-1-2 组件完成更新
    componentDidUpdate(){

    }
    // 3 组件将要卸载
    componentWillUnmount(){
        alert("我被干掉了")
    }
}

ReactDOM.render(
    <Counter/>,
    document.querySelector("#root")
);