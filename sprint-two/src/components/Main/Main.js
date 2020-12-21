import './Main.scss';
import MainVideo from '../MainVideo/MainVideo';
import NextVideos from '../NextVideos/NextVideos';
import Comments from '../Comments/Comments';
import React from 'react';
import Content from '../Content/Content';
// import { v4 as uuid } from 'uuid';
// import axios from 'axios'
// import {BrowserRouter, Route, Switch} from 'react-router-dom'



// Main Component contains currentVideo and videoList states 
function Main({currentVideo, videoList, submitHandler}) {

 
        return (
            <main className="main">
                <MainVideo currentVideo = {currentVideo} />
                <div className="main__content">
                    <div className = "main__content-texts">
                        <Content currentVideo = {currentVideo}/>
                        <Comments submitHandler={submitHandler} currentVideo={currentVideo} />
                    </div>
                    <NextVideos videoList={videoList} />
                </div>
            </main>
        )
    
}


export default Main;