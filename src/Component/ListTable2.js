import React, { useState } from "react";
import './ListTable2.css';

function CommentTable(props){
    const {commentList} = props;
    const getEraseList = props.getEraseList;
    const [checkedComments, setCheckedComments] = useState(new Set());
    const [isAllChecked, setIsAllChecked] = useState(false);
    const [chked, setChked] = useState(false);

    var target = document.getElementById("accuracy");

    const checkedCommentHandler = (id, isChecked) => {

        if (isChecked && !checkedComments.has(id)) {
            checkedComments.add(id);
            setChked(!chked);
            getEraseList(checkedComments);
            //console.log("체크 반영 완료");
            //console.log(id);
        } else if (!isChecked && checkedComments.has(id)) {
            checkedComments.delete(id);
            // setCheckedComments(checkedComments);
            setChked(!chked);
            getEraseList(checkedComments);
            //console.log("체크 없앰 ㅅㄱ");
        }
      };

    const allCheckedHandler = (isChecked) => {
        if(isChecked){
            for(var i = 0; i<commentList.length; i++){
                checkedCommentHandler(commentList[i].commentId, true);
            }
            setIsAllChecked(true);            
        }else{
            for(var i = 0; i<commentList.length; i++){
                checkedCommentHandler(commentList[i].commentId, false);
            }
            setIsAllChecked(false);  
        }
    };
    
    //checked = {checkedComments.has(Comment.commentId)}
    return(
        <table>
            <thead>
            <tr>
                <th>
                    <div className = "all_check">
                        <input className="check_box" 
                        type="checkbox"
                        id= "all_select"
                        checked={checkedComments.size === commentList.length? true : false }
                        onChange={(e) => allCheckedHandler(e.currentTarget.checked)}
                        />
                        <span></span>   
                    </div>
                </th>
                <th>Comment</th>
                <th>Accuracy</th>
            </tr>
            </thead>
            
          
            <tbody>
            { 
                commentList.map((Comment) => {
                 return (     
                    <tr className = "comment_list">
                       <td className = "comment_check"> 
                            <input className = "check_box"
                            type="checkbox"
                            name = "com_id"
                            id = {Comment.commentId}
                            value = {Comment.commentId}
                            onChange={(e) => checkedCommentHandler(Comment.commentId, e.target.checked)}
                            checked = {checkedComments.has(Comment.commentId) ? true : false}
                            /> 
                       </td>
                       <td className = "comment">{Comment.comment}</td>
                       <td className = "comment_acc" id="accuracy" style={
                           parseFloat(Comment.accuracy) >= 90 ? {color : "rgb(185, 0, 0)"} : 
                           parseFloat(Comment.accuracy) >= 80 ? {color : "rgb(185, 151, 0)"} :
                           parseFloat(Comment.accuracy) >= 70 ? {color : "rgb(4, 133, 57)"} :
                           parseFloat(Comment.accuracy) >= 60 ? {color : "rgb(2, 41, 168)"} : {color:"black"}
                        }>
                        {parseFloat(Comment.accuracy).toFixed(2) + "%"}
                        </td>

                        <div id = 'result'></div>
                    </tr>
               
                    );
                })}
            </tbody>
        </table>
        
    );
}

export default CommentTable;