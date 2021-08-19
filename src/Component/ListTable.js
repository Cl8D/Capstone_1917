import React from "react";

function VideoTable(props){

    const {videoList} = props;
    // <VideoTable videoList={videoList}, data={text} />


    return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>제목</th>
                    <th>설명</th>
                </tr>
            </thead>
            <tbody>
                {videoList.map((video) => {
                 return (<tr key={video.videoId}>
                            <td>{video.videoId}</td>
                            <td>{video.videoTitle}</td>
                            <td>{video.description}</td>
                        </tr>);
                })}
            </tbody>
        </table>
    );
}

export default VideoTable;