import {React,useState,useEffect} from 'react';
import axios from 'axios';
import CommentTable from '../Component/ListTable2';
import './Comment.css';

const CommentList = (props) => {
    console.log(props);
    
    const [commentList, setCommentList] = useState([{commentId : "", comment : ""}]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [eraseList, setEraseList] = useState(0);
    
    const getEraseList = (list) =>{
        setEraseList(list);
        //console.log("두근두근");
        //console.log(eraseList);
    }

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
            if(res.data.length === 0){
                alert('나쁜 댓글이 없어요.☺');
                props.history.push("/list");
            }
            setIsLoaded(true);
            
        })
        .catch((err) => {
            setIsLoaded(true);
        });
        
    
    },[isLoaded]);
    
    
    const deleteComment = () => {
        const listToEraseList = Array.from(eraseList);
        console.log(listToEraseList);
        axios
        .post("http://hoduback.space/api/v1/pryt/delete", listToEraseList,{
            headers: {
                Authorization: localStorage.getItem("Token"),
            }
        }
        )
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(listToEraseList);
            console.log(err);
        });
    };

    if (isLoaded){  //로딩 완료
        return (
            <div className = "header2">
                <div className = "first_logo"> SYNC </div>
                <div className= "first_mes2"> 나쁜 댓글이라고 분류된 것들이에요.(⊙_⊙;) </div>
                <div className = "second_mes2"> ⛔ 삭제하고 싶은 댓글을 선택해 주세요.</div>
                <hr className = "line" size="1" width="60%" align="center"></hr>
                <CommentTable commentList={commentList} getEraseList={getEraseList}/>
                
                <div className = "wrapper">
                <button onClick={() => {
                    console.log("hi~~");
                    deleteComment();
                }} className = "delete_comment"> 삭제! </button>
                </div>
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
