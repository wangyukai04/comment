import React from "react";
import User from "./User";
import Content from "./Content";
import UserDate from "./UserDate";
export default function (props) {
    return (
        <div>
            <User {...props.user} />
            <Content content={props.content}/>
            <UserDate date={props.date}/>
        </div>
    )
}