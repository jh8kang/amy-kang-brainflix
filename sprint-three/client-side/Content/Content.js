import './Content.scss';
import viewsLogo from '../../assets/Icons/SVG/views.svg';
import likesLogo from '../../assets/Icons/SVG/likes.svg';

// realTime takes in a number in millisec and returns a string with date 
function realTime (timestamp) {
    let time = new Date(timestamp)
    let timeString = time.toLocaleString();
    let readableDate = timeString.slice(0, 10)
    return readableDate;
}

// CONTENT Component returns JSX of the main video contents 
function Content(props) {
    return (
        <div className="title__bar">
            <h1 className="title__heading">{props.currentVideo.title}</h1>
            <div className="title__info-bar">
                <div className="title__publish">
                    <h2 className="title__publish-publisher">By {props.currentVideo.channel}</h2>
                    <p className="title__publish-date">{realTime(props.currentVideo.timestamp)}</p>
                </div>
                <div className="title__data">
                    <img alt="eye" src={viewsLogo}></img>
                    <p className="title__data-views">{props.currentVideo.views}</p>
                    <button onClick={e=> props.likeHandler(e, props.currentVideo)} className="title__data-button"><img alt="heart" src={likesLogo}></img></button>
                    <p className="title__data-likes">{props.currentVideo.likes}</p>
                </div>
            </div>
            <article className="title__article">{props.currentVideo.description}</article>
        </div>
    )
    
}

export default Content