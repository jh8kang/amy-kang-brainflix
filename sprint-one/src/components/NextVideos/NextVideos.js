import './NextVideos.scss';

function Video(props) {
    let newMainVideo = {
        id: props.id,
        title: props.title, 
        channel: props.channel,
        source: props.source
    }
    return (
        <div className="video__item" onClick = {()=>props.clickHandler(newMainVideo)}>
            <img className="video__item-img" alt="bike guy" id ={props.key} src={props.source}></img>
            <div className="video__item-info">
                <p className="video__item-info-title">{props.title}</p>
                <p className="video__item-info-author">{props.channel}</p>
            </div>
        </div>
    )
}

function NextVideos(props) {
    return (
        <div className="videos">
            <div className="videos__title">NEXT VIDEO</div>
            {props.videoList.map((video)=><Video clickHandler = {props.clickHandler} key={video.id} id={video.id} title={video.title} channel={video.channel} source={video.source}/>)}
        </div>
    )
}

export default NextVideos