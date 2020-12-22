import React from 'react';
import './UploadVideo.scss';
import uploadImg from '../../assets/Images/Upload-video-preview.jpg';


// UploadVideo returns JSX for the thumnail on the upload page
function UploadVideo() {
    return (
        <div className="thumnail">
            <h2 className="thumnail__title">VIDEO THUMNAIL</h2>
            <img alt="bike handle"className="thumnail__video" src={uploadImg}/>
        </div>
    )
}

export default UploadVideo