import {React,useState,useEffect} from 'react';
import axios from 'axios';
import CommentTable from '../Component/ListTable2';
import './Comment.css';
import Swal from 'sweetalert2'

const CommentList = (props) => {
    console.log(props);
    
    const [commentList, setCommentList] = useState([{commentId : "", comment : ""}]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [eraseList, setEraseList] = useState(0);
    const Swal = require('sweetalert2');

    const getEraseList = (list) =>{
        setEraseList(list);
        //console.log("두근두근");
        //console.log(eraseList);
    }

    useEffect(() => {
        // axios
        // .get("http://hoduback.space/api/v1/pryt/comments/" + props.match.params.videoId, {
        //   headers: {
        //     Authorization: localStorage.getItem("Token"),
        //   },
        // })
        // .then((res) => {
        //     console.log(res.data);
        //     setCommentList(res.data);     // 백으로 데이터 받기
        //     if(res.data.length === 0){
        //               Swal.fire({
                        /*
                        title: '✋',
                        text: '나쁜 댓글이 없어요!',
                        icon: 'warning',
                        confirmButtonText: '❤',
                        confirmButtonColor : '#fa7579',
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    */
        //         props.history.push("/list");
        //     }
        //     setIsLoaded(true);
            
        // })
        // .catch((err) => {
        //     setIsLoaded(true);
        // });

        axios
        .post("http://hoduback.space/api/v1/pryt/comments/test",         [
            {
                "commentID" : "Ugygzf08iyeRKU9yc9N4AaABAg",
                "comment" : "정말별로에요"
            },
            {
                "commentID" : "AAygzf08iyeRKU9yc9N4AaABAg",
                "comment" : "정말 나쁜 동영상입니다"
            }
        ],{
          headers: {
            Authorization: localStorage.getItem("Token"),
          },
        }
        )
        .then((res) => {
            console.log(res.data);
            setCommentList(res.data);     // 백으로 데이터 받기
            if(res.data.length === 0){
                Swal.fire({
                    title: '👍',
                    text: '나쁜 댓글이 없어요!',
                    icon: 'warning',
                    confirmButtonText: '❤',
                    confirmButtonColor : '#fa7579',
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                      }
                  })
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
        if(listToEraseList.length == 0){
            Swal.fire({
                title: '앗!',
                text: '나쁜 댓글을 선택해 주세요.😂',
                icon: 'error',
                confirmButtonText: '👌',
                confirmButtonColor : '#fa7579',
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                  }
              })
        }
        else{  
            Swal.fire({
                title: '✔',
                text: '선택한 댓글을 삭제하시겠습니까?',
                showDenyButton : true,
                confirmButtonText: '⭕',
                confirmButtonColor: '#fa7579',
                denyButtonColor: '#919191',
                denyButtonText: '✖',
            }).then((result) => {
                if(result.isConfirmed){
                    axios
                    .post("http://hoduback.space/api/v1/pryt/delete", listToEraseList,{
                        headers: {
                            Authorization: localStorage.getItem("Token"),
                        }
                    }
                    )
                    .then((res) => {
                        console.log(res);
                        Swal.fire({
                            title: '우와!',
                            text: '나쁜 댓글을 삭제했어요.😊',
                            icon: 'success',
                            confirmButtonText: '🙌',
                            confirmButtonColor : '#fa7579',
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                                toast.addEventListener('mouseenter', Swal.stopTimer)
                                toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                        })
                        props.history.push("/list");
                    })
                    .catch((err) => {
                        console.log(listToEraseList);
                        console.log(err);
                    });
                }else{

                }
            })

             

            /*
            axios
            .post("http://hoduback.space/api/v1/pryt/delete", listToEraseList,{
                headers: {
                    Authorization: localStorage.getItem("Token"),
                }
            }
            )
            .then((res) => {
                console.log(res);
                Swal.fire({
                    title: '우와!',
                    text: '나쁜 댓글을 삭제했어요.😊',
                    icon: 'success',
                    confirmButtonText: '🙌',
                    confirmButtonColor : '#fa7579',
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                      }
                  })
                props.history.push("/list");
            })
            .catch((err) => {
                console.log(listToEraseList);
                console.log(err);
            });
            */
        }
    };

    const goList = () => {
        props.history.push("/list");
    }
  
    if (isLoaded){  //로딩 완료
        return (
            <div className = "header2">
                <div className = "first_logo"> SYNC </div>
                <div className= "first_mes2"> 나쁜 댓글이라고 분류된 것들이에요.(⊙_⊙;) </div>
                <div className = "second_mes2"> ⛔ 삭제하고 싶은 댓글을 선택해 주세요.</div>
                <hr className = "line" size="1" width="60%" align="center"></hr>
                <CommentTable 
                    commentList={commentList} 
                    getEraseList={getEraseList}
                />
                
                <div className = "wrapper">
                <button onClick={() => {
                    console.log("hi~~");
                    deleteComment();
                }} className = "delete_comment"> 삭제! </button>
                <button className="go_list" onClick = {goList}>🎬</button>
               
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
