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
        currentVideo: {
            id: uuid(), 
            channel: "Red Cow", 
            title: "BMX Rampage: 2018 HIghlights",
            image: v0, 
            likes: '110,985', 
            views: '1,001,023', 
            timestamp: '12/18/2018', 
            duration: "0:42",
            description: 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time --eight years after his first Red Cow Rampage title'},
        videoList: [
            {id: uuid(), channel: "Todd Welch", description: "No description yet", title:"Become A Tracel Pro In One Easy Lesson", image: v1},
            {id: uuid(), channel: "Cornelia Blair", description: "No description yet", title: "Les Houches The Hidden Gem Of The Chamonix", image: v2},
            {id: uuid(), channel: "Glen Harper", description: "No description yet", title: "Travel Health Useful Medical Information For", image: v3},
            {id: uuid(), channel: "Emily Harper", description: "No description yet", title: "Cheap Airline Tickets Great Ways To Save", image: v4},
            {id: uuid(), channel: "Ethan Owen", description: "No description yet", title: "Take A Romantic Break In A Boutique Hotel", image: v5},
            {id: uuid(), channel: "Lydia Perez", description: "No description yet", title: "Choose The Perfect Accommodations", image: v6},
            {id: uuid(), channel: "Timothy Austin", description: "No description yet", title: "Cruising Destination Ideas", image: v7},
            {id: uuid(), channel: "Scotty Cranmer", description: "No description yet", title: "Train Travel On Track For Safety", image: v8}],
      } 
      

      clickHandler = (e) => {
        let newVideoList = this.state.videoList.filter(video => video.id !== e.id);
        newVideoList.push(this.state.currentVideo);

        this.setState({
            videoList: newVideoList, 
             currentVideo: {id: e.id, channel: e.channel, title: e.title, image: e.image, description: e.description},
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