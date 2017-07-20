import React from "react";

export default class ClockApp extends React.Component{
    componentWillUnmount(){
        console.log("delete");
    }
    render(){
        return <h1>{this.props.date}</h1>

    }
}