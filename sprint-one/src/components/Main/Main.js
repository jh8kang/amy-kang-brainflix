import './Main.scss';
import MainVideo from '../MainVideo/MainVideo';
import NextVideos from '../NextVideos/NextVideos';
import Comments from '../Comments/Comments';
import React, { Component } from 'react';
import Content from '../Content/Content';
import { v4 as uuid } from 'uuid';
import v0 from '../../assets/Images/video-list-0.jpg';
import v1 from '../../assets/Images/video-list-1.jpg';
import v2 from '../../assets/Images/video-list-2.jpg';
import v3 from '../../assets/Images/video-list-3.jpg';
import v4 from '../../assets/Images/video-list-4.jpg';
import v5 from '../../assets/Images/video-list-5.jpg';
import v6 from '../../assets/Images/video-list-6.jpg';
import v7 from '../../assets/Images/video-list-7.jpg';
import v8 from '../../assets/Images/video-list-8.jpg';


// Main Component contains currentVideo and videoList states 
class Main extends Component {
    state = {
        currentVideo: {id: uuid(), channel: "Red Cow", title: "BMX Rampage: 2018 HIghlights",source: v0, likes: '110,985', views: '1,001,023', timestamp: '12/18/2018'},
        videoList: [
            {id: uuid(), channel: "Todd Welch", title:"Become A Tracel Pro In One Easy Lesson", source: v1},
            {id: uuid(), channel: "Cornelia Blair", title: "Les Houches The Hidden Gem Of tThe Chamonix", source: v2},
            {id: uuid(), channel: "Glen Harper", title: "Travel Health Useful Medical Information For", source: v3},
            {id: uuid(), channel: "Emily Harper", title: "Cheap Airline Tickets Great Ways To Save", source: v4},
            {id: uuid(), channel: "Ethan Owen", title: "Take A Romantic Break In A Boutique Hotel", source: v5},
            {id: uuid(), channel: "Lydia Perez", title: "Choose The Perfect Accommodations", source: v6},
            {id: uuid(), channel: "Timothy Austin", title: "Cruising Destination Ideas", source: v7},
            {id: uuid(), channel: "Scotty Cranmer", title: "Train Travel On Track For Safety", source: v8}],
      }
      

      clickHandler = (e) => {
        let newVideoList = this.state.videoList.filter(video => video.id !== e.id);
        newVideoList.push(this.state.currentVideo);

        this.setState({
            videoList: newVideoList, 
             currentVideo: {id: e.id, channel: e.channel, title: e.title, source: e.source},
         });
      }

      render() {
        return (
            <main className="main">
                <MainVideo currentVideo = {this.state.currentVideo} />
                <div className="main__content">
                    <div className = "main__content-texts">
                        <Content currentVideo = {this.state.currentVideo}/>
                        <Comments />
                    </div>
                    <NextVideos videoList={this.state.videoList} clickHandler={this.clickHandler}/>
                </div>
            </main>
        )
      }
}


export default Main;