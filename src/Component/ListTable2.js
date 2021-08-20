import React from "react";
import './ListTable2.css';

function CommentTable(props){
    const {commentList} = props;
    return(
        <table>
            <thead>
            </thead>
            <tbody>
                {
                commentList.map((Comment) => {
                 return (
                <tr className = "table2">
                    <tr className = "comment_list">
                        <td className = "comment_acc">{Comment.accuracy}</td>
                        <input className = "check_box" type="checkbox" name = "com_id" value = {Comment.comment}/> <td className = "comment">{Comment.comment}</td>
                    </tr>
                </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default CommentTable;