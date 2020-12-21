import React, {Component} from 'react'
import Main from '../../components/Main/Main';
import './HomePage.scss';
import axios from 'axios'
// import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {realTimeFunc} from '../../modules/realTimeFunc';




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
   
      componentDidMount() {
        axios.get(url + apiKey)
        .then(res => {
            // console.log(res.data)
            this.setState({
                videoList: res.data,
            })
        })
        axios.get(url + firstVideoId + apiKey)
        .then(res=> {
            // console.log(res.data)
            this.setState({
                currentVideo: res.data
            })
        })
    }

    submitHandler(e, currentVideoId) {
        e.preventDefault();
        let newComment = {
            name: "no one",
            comment: e.target.commentInput.value
        }

        axios.post((url + currentVideoId + '/comments' + apiKey), newComment)

        let currentVideoState = this.state.currentVideo;
        let newVideoComments = this.state.currentVideo.comments; 
        newVideoComments.push(newComment)
        currentVideoState.comments = newVideoComments;
        this.setState({
            currentVideo: currentVideoState,
        })

        let commentForm = document.querySelector('.comment-form');
        commentForm.reset();
    }
    

    componentDidUpdate(prevProps, prevState) {
            const {match} = this.props
            if (typeof match.params.videoId !== 'undefined') {
                if (match.params.videoId !== this.state.currentVideo.id) {
                    axios.get(url + match.params.videoId + apiKey)
                    .then(res=> {
                        this.setState({
                            currentVideo: res.data,
                        })
                })
                } 
            } 
        }
      

    render() {
        return (
            <>
                <Main submitHandler={this.submitHandler}currentVideo={this.state.currentVideo} videoList={this.state.videoList}/>
            </>
        )
    }
}


export default HomePage