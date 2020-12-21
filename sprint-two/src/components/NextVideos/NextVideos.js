import './NextVideos.scss';
import {Link} from 'react-router-dom'

// Video takes in props and returns JSX 
function Video(props) {
    return (
        <Link className="video__link" to={`/${props.id}`}>
            <div className="video__item">
                <img className="video__item-img" alt="bike guy" id ={props.id} src={props.image}></img>
                <div className="video__item-info">
                    <p className="video__item-info-title">{props.title}</p>
                    <p className="video__item-info-author">{props.channel}</p>
                </div>
            </div>
        </Link>
    )
}

// NextVideos takes in props and returns JSX for each video
function NextVideos(props) {
    return (
        <div className="videos">
            <div className="videos__title">NEXT VIDEO</div>
            {props.videoList.map((video)=><Video  key={video.id} id={video.id} title={video.title} channel={video.channel} image={video.image} description={video.description}/>)}
        </div>
    )
}

export default NextVideos