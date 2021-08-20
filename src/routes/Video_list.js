import {React,useState,useEffect} from 'react';
import axios from 'axios';
import VideoTable from '../Component/ListTable';
import './Video_list.css';

const VideoList = (props) => {
    const [videoList, setVideoList] = useState([{description : "", videoId : "", videoTitle : ""}]);
    const [isLoaded, setIsLoaded] = useState(false);
    
    
    const content = videoList.map((video) =>
        <div key={video.videoId}>
            {video.videoId + "----" + video.videoTitle + "-----" + video.description}
        </div>
    )
    
    
    useEffect(() => {
        axios
        .get("http://hoduback.space/api/v1/pryt/list?page=3", {
          headers: {
            Authorization: localStorage.getItem("Token"),
          },
        })
        .then((res) => {
            console.log(res.data);
            setVideoList(res.data);     // 백으로 데이터 받기
            //console.log('ID : ' + videoList[0].videoId);

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
                <div className= "first_mes"> 제목을 클릭해 나쁜 댓글들을 확인해 보세요! 😎</div>
                <hr className = "line" size="1" width="70%" align="center"></hr>
                <VideoTable videoList={videoList} />
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

export default VideoList;
