import './Content.scss';
import viewsLogo from '../../assets/Icons/SVG/views.svg';
import likesLogo from '../../assets/Icons/SVG/likes.svg';

// let datePublished = '12/18/2018';
// let views = '1,001,023';
// let likes = '110,985';
let article = 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time --eight years after his first Red Cow Rampage title';

function Content(props) {
    return (
        <div className="title__bar">
            <h1 className="title__heading">{props.currentVideo.title}</h1>
            <div className="title__info-bar">
                <div className="title__publish">
                    <h2 className="title__publish-publisher">By {props.currentVideo.channel}</h2>
                    <p className="title__publish-date">{props.currentVideo.timestamp}</p>
                </div>
                <div className="title__data">
                    <img alt="eye" src={viewsLogo}></img>
                    <p className="title__data-views">{props.currentVideo.views}</p>
                    <img alt="heart" src={likesLogo}></img>
                    <p className="title__data-likes">{props.currentVideo.likes}</p>
                </div>
            </div>
            <article className="title__article">{article}</article>
        </div>
    )
    
}

export default Content