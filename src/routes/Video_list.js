import {React,useState,useEffect} from 'react';
import axios from 'axios';
import VideoTable from '../Component/ListTable';

const VideoList = (props) => {
    const [videoList, setVideoList] = useState([{description : "", videoId : "", videoTitle : ""}]);
    const [isLoaded, setIsLoaded] = useState(false);
    
    const content = videoList.map((video) =>
        <div key={video.videoId}>
            {video.videoId + "----" + video.videoTitle + "-----" + video.description}
        </div>
    )

     //String videoList = null;
     //videoList = "abcd";
     //setVideoList("abcd")
    
    useEffect(() => {
        /*
        setVideoList = [
            
            {
                description: "",
                videoId: "zCdUwBDtqZg",
                videoTitle: "환공포증 유발 주의"
            },
            {
                description: "",
                videoId: "zCdUwBDrqZg",
                videoTitle: "영상"
            }
        
        ];
        */
        
        axios
        .get("http://hoduback.space/api/v1/pryt/list", {
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
            <div>
                hello 
               <h1>{isLoaded}</h1>
               <hr/>
               {content}
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
