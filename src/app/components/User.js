/**
 * Created by Administrator on 2017/7/18.
 */
import React from "react";
import UserName from "./UserName";
import UserImg from "./UserImg";
export default function (props) {
    return (
        <div className="user">
            <UserImg avatar={props.avatar}/>
            <UserName name={props.name}/>
        </div>
    )
}