import './Content.scss';
import viewsLogo from '../../assets/Icons/SVG/views.svg';
import likesLogo from '../../assets/Icons/SVG/likes.svg';
import {realTimeFunc} from '../../modules/realTimeFunc';

function Content(props) {
    let time = realTimeFunc(props.currentVideo.timestamp);
    return (
        <div className="title__bar">
            <h1 className="title__heading">{props.currentVideo.title}</h1>
            <div className="title__info-bar">
                <div className="title__publish">
                    <h2 className="title__publish-publisher">By {props.currentVideo.channel}</h2>
                    <p className="title__publish-date">{time}</p>
                </div>
                <div className="title__data">
                    <img alt="eye" src={viewsLogo}></img>
                    <p className="title__data-views">{props.currentVideo.views}</p>
                    <img alt="heart" src={likesLogo}></img>
                    <p className="title__data-likes">{props.currentVideo.likes}</p>
                </div>
            </div>
            <article className="title__article">{props.currentVideo.description}</article>
        </div>
    )
    
}

export default Content