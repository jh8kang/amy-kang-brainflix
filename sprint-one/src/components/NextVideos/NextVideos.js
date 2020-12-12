import './NextVideos.scss';
// import React, { Component } from 'react';


function Video(props) {
    // console.log(props)

   

    return (
        <div className="video__item">
            <img className="video__item-img" alt="bike guy" src={props.source}></img>
            <div className="video__item-info">
                <p className="video__item-info-title">{props.title}</p>
                <p className="video__item-info-author">{props.author}</p>
            </div>
        </div>
    )

}

function NextVideos(props) {
    // console.log(props.videoList[0])
    return (
        <div className="videos">
            <div className="videos__title">NEXT VIDEO</div>
            {props.videoList.map((video)=><Video key = {video.id} title={video.title} author={video.author} source={video.source}/>)}
        </div>
    )
}

export default NextVideos