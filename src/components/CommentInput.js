import React from "react";
export default class CommentInput extends React.Component{
    constructor(){
        super();
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        let user = this.user.value;
        let content = this.content.value;
        this.props.addComment({user,content});
        this.content.value = "";
    };
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label className="control-label" htmlFor="username">用户名</label>
                    <input className="form-control" required={true} ref={input=>this.user=input} type="text" id="username"/>
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="content">内容</label>
                    <textarea id="content" required={true} ref={input=>this.content=input} className="form-control" rows="3">

                    </textarea>
                </div>
                <button className="btn btn-info pull-right">发布</button>
            </form>
        )
    }
}