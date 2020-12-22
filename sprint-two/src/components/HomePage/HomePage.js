import React, {Component} from 'react'
import './HomePage.scss';
import axios from 'axios'
import MainVideo from '../MainVideo/MainVideo'
import NextVideos from '../NextVideos/NextVideos'
import Comments from '../Comments/Comments';
import Content from '../Content/Content';

let firstVideoId = '1af0jruup5gu';
let apiKey = '?api_key=c4f92712-c6b3-47a0-abb5-1c487b16a781';
let url ='https://project-2-api.herokuapp.com/videos/';


class HomePage extends Component {
    constructor(){
        super();
        this.state = {
            currentVideo: {comments: [{comment: ""}]},
            videoList: []
          } 
        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler(e, currentVideoId) {
        e.preventDefault();
        let newComment = {
            name: "BrainStation user",
            comment: e.target.commentInput.value
        }

        axios.post((url + currentVideoId + '/comments' + apiKey), newComment)
        .then(res=> {
            let currentVideoState = this.state.currentVideo; 
            let videoNewComments = this.state.currentVideo.comments;
            videoNewComments.push(res.data);
            currentVideoState.comments = videoNewComments;
            this.setState({
                currentVideo: currentVideoState,
            })
        })
        .catch(err => console.log(err))

        let commentForm = document.querySelector('.comment-form');
        commentForm.reset();
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

    componentDidUpdate() {
        const {match} = this.props
        if (typeof match.params.videoId !== 'undefined') {
            if (match.params.videoId !== this.state.currentVideo.id) {
                axios.get(url + match.params.videoId + apiKey)
                .then(res=> {
                    this.setState({
                        currentVideo: res.data,
                    })
                })
                .catch(err => console.log(err))
            } 
        } 
        // console.log(this.state.currentVideo)
    }
      

    render() {
        // console.log(this.state.currentVideo.comments)
        return (
            <main className="main">
                <MainVideo currentVideo = {this.state.currentVideo} />
                <div className="main__content">
                    <div className = "main__content-texts">
                        <Content currentVideo = {this.state.currentVideo}/>
                        <Comments submitHandler={this.submitHandler} currentVideo={this.state.currentVideo} />
                    </div>
                    <NextVideos videoList={this.state.videoList} />
                </div>
            </main>
        )
    }
}


export default HomePage