import React from "react";
export default class Comment extends React.Component{
    render(){
        return (
            <li className="list-group-item">
                <span className="col-md-3">{this.props.username}</span>:
                <span className="col-md-9">{this.props.content}</span>
                <span className="pull-right">{this.props.date}</span>
            </li>
        )
    }
}