import React from "react";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
export default class CommentApp extends React.Component{
    constructor(){
        super();
        // 在两个子组件共同的父组件中定义一个状态对象 comments数组表示留言列表
        this.state = {
            comments:[{
                id:1,
                user:"张三",
                createAt:new Date().toLocaleString(),
                content:"今天天气真好"
            },
            {
                id:2,
                user:"李四",
                createAt:new Date().toLocaleString(),
                content:"今天天气真好"
            }]
        }
    }
    addComment=(comment)=>{
        comment.id = Date.now();
        comment.createAt = new Date().toLocaleString();
        this.setState({
            comments:[...this.state.comments,comment]
        });
    };
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3>欢迎来到我的留言板</h3>
                            </div>
                            <div className="panel-body">
                                <CommentInput addComment={this.addComment}/>
                            </div>
                            <div className="panel-footer">
                                <CommentList comments={this.state.comments}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}