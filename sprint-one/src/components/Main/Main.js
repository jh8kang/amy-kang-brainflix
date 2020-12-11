import './Main.scss';
import MainVideo from '../MainVideo/MainVideo';
import NextVideos from '../NextVideos/NextVideos';
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


class Main extends Component {
    state = {
        currentVideo: {author: "Red Cow", title: "BMX Rampage: 2018 HIghlights",source: v0},
        videoList: [
            {id: uuid(),author: "Todd Welch", title:"Become A Tracel Pro In One Easy Lesson", source: v1},
            {id: uuid(),author: "Cornelia Blair", title: "Les Houches The Hidden Gem Of tThe Chamonix", source: v2},
            {id: uuid(),author: "Glen Harper", title: "Travel Health Useful Medical Information For", source: v3},
            {id: uuid(),author: "Emily Harper", title: "Cheap Airline Tickets Great Ways To Save", source: v4},
            {id: uuid(),author: "Ethan Owen", title: "Take A Romantic Break In A Boutique Hotel", source: v5},
            {id: uuid(),author: "Lydia Perez", title: "Choose The Perfect Accommodations", source: v6},
            {id: uuid(),author: "Timothy Austin", title: "Cruising Destination Ideas", source: v7},
            {id: uuid(),author: "Scotty Cranmer", title: "Train Travel On Track For Safety", source: v8}],
      }
      render() {
        return (
            <main className="main">
                <MainVideo currentVideo = {this.state.currentVideo} />
                <Content currentVideo ={this.state.currentVideo}/>
                <NextVideos videoList={this.state.videoList}/>
            </main>
        )
      }
}

export default Main;