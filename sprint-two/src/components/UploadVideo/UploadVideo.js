import React from 'react';
import './UploadVideo.scss';
import uploadImg from '../../assets/Images/Upload-video-preview.jpg';

export default function UploadVideo() {
    return (
        <div className="thumnail">
            <h2 className="thumnail__title">VIDEO THUMNAIL</h2>
            <img alt="bike handle"className="thumnail__video" src={uploadImg}/>
        </div>
    )
}
