import {React,useState,useEffect} from 'react';
import axios from 'axios';
import CommentTable from '../Component/ListTable2';
import './Comment.css';

const CommentList = (props) => {
    console.log(props);
    
    const [commentList, setCommentList] = useState([{commentId : "", comment : ""}]);
    const [isLoaded, setIsLoaded] = useState(false);

    const content = commentList.map((comment) =>
        <div key={comment.commentId}>
            {comment.commentId + "----" + comment.comment }
        </div>
    )

    
    useEffect(() => {
        axios
        .get("http://hoduback.space/api/v1/pryt/comments/" + props.match.params.videoId, {
          headers: {
            Authorization: localStorage.getItem("Token"),
          },
        })
        .then((res) => {
            console.log(res.data);
            setCommentList(res.data);     // 백으로 데이터 받기
            setIsLoaded(true);
            
        })
        .catch((err) => {
            setIsLoaded(true);
        });
        
    
    },[isLoaded]);
    

    if (isLoaded){  //로딩 완료
        return (
            <div className = "header2">
                <div className = "first_logo"> SYNC </div>
                <div className= "first_mes2"> 나쁜 댓글이라고 분류된 것들이에요.(⊙_⊙;) </div>
                <div className = "second_mes2"> ⛔ 삭제하고 싶은 댓글을 선택해 주세요.</div>
                <hr className = "line" size="1" width="70%" align="center"></hr>
                <CommentTable commentList={commentList} />
                <button className = "delete_comment"> 삭제! </button>
            </div>            
        )
    }
    else{          // 로딩 중
        return(
            <div className ="loading-container">
            <div className="loading"></div>
            <div id="loading-text">loading</div>      
            </div>
        )
    }

}

export default CommentList;
