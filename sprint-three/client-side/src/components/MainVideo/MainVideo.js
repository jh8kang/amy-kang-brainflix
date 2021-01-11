import './MainVideo.scss';
import fullscreen from '../../assets/Icons/SVG/fullscreen.svg';
import volume from '../../assets/Icons/SVG/volume.svg';
import ElapsedTime from '../ElapsedTime/ElapsedTime';
import React from 'react';
import VideoButton from '../VideoButton/VideoButton';

// MAINVIDEO component returns JSX for the main video
class MainVideo extends React.Component {
    constructor() {
        super();
        this.state = {
            timingEvents: [],
            timer: 0,
        }
        this.addTimerEvent = this.addTimerEvent.bind(this)
        this.tick = this.tick.bind(this)
        
    }
    
    componentDidMount() {
        setInterval(this.tick, 1000)
    }

    tick() {
        this.setState({timer: this.state.timer + 1})
    }

    addTimerEvent() {
        this.setState({
            timingEvents: [...this.state.timingEvents, new Date()], 
        })

    }
    render() {
        return (
            <section className="video">
                <video className ="video__img" id="video" poster={this.props.currentVideo.image}></video>
                <div className="video__control-bar">
                    <VideoButton addTimerEvent = {this.addTimerEvent} timingEvents={this.state.timingEvents}/>
                    <div className="video__scrubby">
                        <div className="video__scrubby-bar"></div>
                        <ElapsedTime  timingEvents={this.state.timingEvents} currentVideo={this.props.currentVideo}/>
                    </div>
                    <div className="video__control">
                        <img alt="fullscreen button"src={fullscreen} className="video__control-size"></img>
                        <img alt="volume controler" src={volume} className="video__control-vol"></img>
                    </div>
                </div>
            </section>
        )
    }

}

export default MainVideo;