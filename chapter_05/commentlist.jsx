import React from "react";
import Comment from "./comment";


const comments = [
    {
        name :"게리시",
        comment : "어서와 게릿은 첨이지?",
    },
    {
        name : "박재민",
        comment : "너무 어려워요..",

    },
    {
        name : "궤리쉬",
        comment : "어쩔TV",
    },
];

function CommentList(props){
    return(
        <div>
            {comments.map((comment)=>{
                return(
                    <Comment name={comment.name} comment = {comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;