import React from "react";
import ReactDOM from "react-dom";

import ClockApp from "./components/ClockApp"

/*function Clock(props) {
    return <h1>{props.date}</h1>
}*/
// 1.声明一个继承自react.component 的类
// 2.在类的内部编写一个render方法
// 3.把原函数体拷贝过来 并且把props改变成this.props

class Clock extends React.Component{
    constructor(props){
        super(props);
        // 在当前实例上挂载一个私有属性
        this.state = {
            count:0,
            date:new Date().toLocaleString()
        }
    }
    /*
    * 组件的声明周期函数 装载前 装载后 卸载后
    * */
    componentDidMount(){
        // 组件装载完成之后  ReactDOM ==> DOM
        this.timer = setInterval(()=>{
            // 用一个新的状态对象来更新状态
            this.setState({
                count:this.state.count+1,
                date:new Date().toLocaleString()
            });
        },1000);
    }
    componentWillUnmount(){
        // 组件将要从页面中移除的时候  执行此函数
        clearInterval(this.timer);
    }
    render(){
        return <div>
            <span>{this.state.count}</span>
            {this.state.count<5?<ClockApp date={this.state.date}/>:null}
        </div>
    }
}
ReactDOM.render(
    <Clock/>,
    document.querySelector("#root")
);