import './NextVideos.scss';

// Video takes in props and returns JSX 
function Video(props) {
    let newMainVideo = {
        id: props.id,
        title: props.title, 
        channel: props.channel,
        image: props.image
    }
    return (
        <div className="video__item" onClick = {()=>props.clickHandler(newMainVideo)}>
            <img className="video__item-img" alt="bike guy" id ={props.id} src={props.image}></img>
            <div className="video__item-info">
                <p className="video__item-info-title">{props.title}</p>
                <p className="video__item-info-author">{props.channel}</p>
            </div>
        </div>
    )
}

// NextVideos takes in props and returns JSX for each video
function NextVideos(props) {
    return (
        <div className="videos">
            <div className="videos__title">NEXT VIDEO</div>
            {props.videoList.map((video)=><Video clickHandler = {props.clickHandler} key={video.id} id={video.id} title={video.title} channel={video.channel} image={video.image}/>)}
        </div>
    )
}

export default NextVideos