import './MainVideo.scss';
import play from '../../assets/Icons/SVG/play.svg';
import fullscreen from '../../assets/Icons/SVG/fullscreen.svg';
import volume from '../../assets/Icons/SVG/volume.svg';

// MAINVIDEO component returns JSX for the main video
function MainVideo(props) {
    return (
        <section className="video">
            <video className ="video__img" poster={props.currentVideo.image}></video>
            <div className="video__control-bar">
                <div className ="video__play">
                    <img alt="play button" className ="video__play-btn"src={play}></img>
                </div>
                <div className="video__scrubby">
                    <div className="video__scrubby-bar"></div>
                    <div className="video__scrubby-time">0:00 / 0:42</div>
                </div>
                <div className="video__control">
                    <img alt="fullscreen button"src={fullscreen} className="video__control-size"></img>
                    <img alt="volume controler" src={volume} className="video__control-vol"></img>
                </div>
            </div>
        </section>
    )
}

export default MainVideo;