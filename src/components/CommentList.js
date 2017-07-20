import React from "react";
import Comment from "./Comment";
export default class CommentList extends React.Component{
    render(){
        return (
            <ul className="list-group">
                {this.props.comments.map(item=>{
                    return <Comment key={item.id} username={item.user} content={item.content} date={item.createAt}/>
                })}
            </ul>
        )
    }
}