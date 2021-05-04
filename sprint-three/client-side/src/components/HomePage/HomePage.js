import './HomePage.scss';
import React, {Component} from 'react'
import axios from 'axios'
import MainVideo from '../MainVideo/MainVideo'
import NextVideos from '../NextVideos/NextVideos'
import Comments from '../Comments/Comments';
import Content from '../Content/Content';
import {v4 as uuid} from 'uuid'
import { withRouter } from "react-router-dom";


// Variables 
let firstVideoId = '1af0jruup5gu';

// HomePage is a statefull component that contains life cycle methods and returns JSX for the Home Page 
class HomePage extends Component {
    constructor(){
        super();
        this.state = {
            currentVideo: {comments: [{comment: ""}]},
            videoList: [], 
            likeToggle: false,
            
          } 
        this.submitHandler = this.submitHandler.bind(this);
        this.likeHandler = this.likeHandler.bind(this);
    }

    likeHandler(e, currentVideo) {
        if (this.state.likeToggle === false) {
            axios.post('http://localhost:8000/videos/' + currentVideo.id + '/likes')
            .then(res => {
                this.setState({
                    currentVideo: res.data
                })
            })
            this.setState({
                likeToggle: true
            })
        } else if (this.state.likeToggle ===true) {
            axios.post('http://localhost:8000/videos/' + currentVideo.id + '/likes/delete')
            .then(res => {
                this.setState({
                    currentVideo: res.data
                })
            })
            this.setState({
                likeToggle: false
            })
        }
    }

    submitHandler(e, currentVideoId) {
        e.preventDefault();
        let newComment = {
            name: "BrainFlix User",
            comment: e.target.commentInput.value,
            id: uuid(),
            videoid: currentVideoId, 
            likes: 0, 
            timestamp: Date.now()
        }
        axios
            .post(('http://localhost:8000/comments/' + currentVideoId), newComment)
            .then(res=> {
                let currentVideoState = this.state.currentVideo; 
                let videoComments = this.state.currentVideo.comments;
                videoComments.push(res.data);
                currentVideoState.comments = videoComments;
                this.setState({
                    currentVideo: currentVideoState,
                })
            })
            .catch((err) => console.log(err))
        let commentForm = document.querySelector('.comment-form');
        commentForm.reset();
    }
  
    componentDidMount(event) {
        axios
            .get('http://localhost:8000/videos/' + firstVideoId)
            .then(res=> {
                this.setState({
                    currentVideo: res.data,
                })
            })
            .catch((err)=>console.log("error:", err))
        axios
            .get('http://localhost:8000/videos')
            .then(res => {
                let filteredList = res.data.filter((video)=>video.id !== this.state.currentVideo.id)
                this.setState({
                    videoList: filteredList
                })
            })
            .catch(err=>console.log("error:", err))
        
    }

    componentDidUpdate(prevProps, prevState) {
        const {match} = this.props
        if (
            this.props.location.pathname !== prevProps.location.pathname
          ) {
            window.scrollTo(0, 0);
          }


        if (typeof match.params.videoId !== 'undefined') {
            if (match.params.videoId !== this.state.currentVideo.id) {
                axios
                    .get('http://localhost:8000/videos/'+ match.params.videoId)
                    .then(res=> {
                        this.setState({
                            currentVideo: res.data,
                        })
                    })
                    .catch(err => console.log(err))
                axios
                    .get('http://localhost:8000/videos/')
                    .then(res => {
                        let filteredList = res.data.filter((video)=> (video.id !== this.state.currentVideo.id))
                        this.setState({
                            videoList: filteredList
                        })
                    })
            } 
        } 
    }
      
    render() {
        return (
            <main className="main">
                <MainVideo currentVideo = {this.state.currentVideo} />
                <div className="main__content">
                    <div className = "main__content-texts">
                        <Content currentVideo = {this.state.currentVideo} likeHandler={this.likeHandler}/>
                        <Comments submitHandler={this.submitHandler} currentVideo={this.state.currentVideo} />
                    </div>
                    <NextVideos videoList={this.state.videoList} />
                </div>
            </main>
        )
    }
}

export default HomePage