/*base*/
import React from "react";
import ReactDOM from "react-dom";
/*style*/
import "./css/6.css"
/*components*/
import Comment from "./components/Comment";
/*data*/
import comment from "./data/comment";
/*render*/
ReactDOM.render(
    <Comment {...comment}/>,
    document.querySelector("#root")
);