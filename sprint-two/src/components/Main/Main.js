import './Main.scss';
import MainVideo from '../MainVideo/MainVideo';
import NextVideos from '../NextVideos/NextVideos';
import Comments from '../Comments/Comments';
import React, { Component } from 'react';
import Content from '../Content/Content';
// import { v4 as uuid } from 'uuid';
import axios from 'axios'
// import {BrowserRouter, Route, Switch} from 'react-router-dom'


let firstVideoId = '1af0jruup5gu';

let apiKey = '?api_key=c4f92712-c6b3-47a0-abb5-1c487b16a781';
let url ='https://project-2-api.herokuapp.com/videos/';


// Main Component contains currentVideo and videoList states 
class Main extends Component {
    state = {
        currentVideo: {comments: [{comment: ""}]},
        videoList: []
      } 


      componentDidMount() {
          axios.get(url + apiKey)
          .then(res => {
              this.setState({
                  videoList: res.data,
              })
          })

          axios.get(url + firstVideoId + apiKey)
          .then(res=> {
              this.setState({
                  currentVideo: res.data
              })
          })
      }

      clickHandler() {
        let item = this.state.videoList.find((video)=> video.id === this.props.match.params.videoId)
        // console.log(item.id)
        if (item.id !== this.state.currentVideo.id) {
            axios.get(url + item.id + apiKey)
            .then(res=> {
                this.setState({
                    currentVideo: res.data,
                })
            })
        } 

      }

      componentDidUpdate() {
        this.clickHandler();
      }

      

      render() {
        //   console.log(this.props)
        // console.log(this.state.currentVideo.id)
        return (
            <main className="main">
                <MainVideo currentVideo = {this.state.currentVideo} />
                <div className="main__content">
                    <div className = "main__content-texts">
                        <Content currentVideo = {this.state.currentVideo}/>
                        <Comments currentVideo={this.state.currentVideo} />
                    </div>
                    <NextVideos videoList={this.state.videoList} clickHandler={this.clickHandler}/>
                </div>
            </main>
        )
      }
}


export default Main;