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
                        <td className = "first_video">{<iframe width="360" height="215" src= {"https://www.youtube.com/embed/" + video[0].videoId} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}</td> 
                        <td className = "second_video">{<iframe width="360" height="215" src= {"https://www.youtube.com/embed/" + video[1].videoId} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}</td>
                        <td className = "third_video">{<iframe width="360" height="215" src= {"https://www.youtube.com/embed/" + video[2].videoId} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}</td>
                    </tr>
                    <tr className = "title_list">
                        <td className = "first_title">{<a href= {"/list/" + video[0].videoId} >{video[0].videoTitle}</a>}</td>
                        <td className = "second_title">{<a href={"/list/" + video[1].videoId} >{video[1].videoTitle}</a>}</td>
                        <td className = "third_title">{<a href={"/list/" + video[2].videoId}>{video[2].videoTitle}</a>}</td>
                    </tr>
                    <tr className = "des_list">
                        <td className = "first_des">{video[0].description}</td>
                        <td className = "second_des">{video[1].description}</td>
                        <td className = "third_des">{video[2].description}</td>
                    </tr>
                </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default VideoTable;