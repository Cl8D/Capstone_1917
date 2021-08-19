import {React,useState,useEffect} from 'react';
import axios from 'axios';

const VideoList = (props) => {
    const [videoList,setVideoList] = useState(null);
    // String videoList = null;
    // videoList = "abcd";
    // setVideoList("abcd")

    useEffect(() => {
        axios
        .get("http://hoduback.space/api/v1/pryt/list", {
          headers: {
            Authorization: localStorage.getItem("Token"),
          },
        },{
            "title" : "dfdf"
        })
        .then((res) => {
            console.log(res.data);
            setVideoList(res.data);
        })
        .catch((err) => {});
    },[]);
    

    return (
            <div>
                hello
            </div>
            
    )
}

export default VideoList;
