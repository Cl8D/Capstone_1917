import React from "react";
import './ListTable.css';

function VideoTable(props){
    const {videoList} = props;
    // <VideoTable videoList={videoList}, data={text} />

    return(
        <table>
            <thead>
            </thead>
            <tbody>
                {
                videoList.map((video) => {
                 return (
                <tr className = "table">
                    <tr className = "video_list">
                        {video.map((v) => {
                            return (<td className = "first_video">{<iframe width="360" height="215" src= {"https://www.youtube.com/embed/" + v.videoId} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}</td> );
                        })}
                        
                         </tr>
                    <tr className = "title_list">
                        {video.map((v) => {
                            return (<td className = "first_title">{<a href= {"/list/" + v.videoId} >{v.videoTitle}</a>}</td> );
                        })}
                    
                    </tr>
                    <tr className = "des_list">
                        {video.map((v) => {
                            return (<td className = "first_des">{v.description}</td> );
                        })}
                  
                    </tr>
                </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default VideoTable;