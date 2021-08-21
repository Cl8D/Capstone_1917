import React, { useState } from "react";
import './ListTable2.css';

function CommentTable(props){
    const {commentList} = props;
    const getEraseList = props.getEraseList;
    const [checkedComments, setCheckedComments] = useState(new Set());

    const checkedCommentHandler = (id, isChecked) => {
        if (isChecked) {
            checkedComments.add(id);
            setCheckedComments(checkedComments);
            getEraseList(checkedComments);
            //console.log("체크 반영 완료");
            //console.log(checkedComments);
        } else if (!isChecked && checkedComments.has(id)) {
            checkedComments.delete(id);
            setCheckedComments(checkedComments);
            getEraseList(checkedComments);
            //console.log("체크 없앰 ㅅㄱ");
        }
      };

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
                        <input className = "check_box" type="checkbox" name = "com_id" value = {Comment.commentID}  onChange={(e) => checkedCommentHandler(Comment.commentID, e.currentTarget.checked)}/> <td className = "comment">{Comment.comment}</td>
                        <div id = 'result'></div>
                    </tr>
                </tr>
                    );
                })}
            </tbody>
        </table>
        
    );
}

export default CommentTable;