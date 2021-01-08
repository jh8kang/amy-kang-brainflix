import React from 'react'
import './UploadPage.scss';
import UploadForm from '../../components/UploadForm/UploadForm';
import UploadVideo from '../../components/UploadVideo/UploadVideo';
import {v4 as uuid} from 'uuid';
import uploadImg from '../../assets/Images/Upload-video-preview.jpg';
import axios from 'axios';

// UploadPage Component returns JSX for the upload page
class UploadPage extends React.Component {
    submitHandler(e) {
        e.preventDefault();
        let newVideo = {
            id: uuid(),
            title: e.target.videoTitle.value,
            channel: "Brainflix",
            image: uploadImg,
            description: e.target.videoDescription.value,
            views: "1,001,023",
            likes: "110,985",
            duration: "4:01",
            video: "https://project-2-api.herokuapp.com/stream",
            timestamp: Date.now(),
            comments: [
                {
                    "name": "Micheal Lyons",
                    "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
                    "id": "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
                    "likes": 0,
                    "timestamp": 1545162149000
                },
                {
                    "name": "Gary Wong",
                    "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
                    "id": "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
                    "likes": 0,
                    "timestamp": 1544595784046
                },
                {
                    "name": "Theodore Duncan",
                    "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
                    "id": "993f950f-df99-48e7-bd1e-d95003cc98f1",
                    "likes": 0,
                    "timestamp": 1542262984046
                }
            ]
        }
        axios.post('http://localhost:8000/videos', newVideo)
        .then(res => {
            console.log(res)
        })
        
    }
    render() {
        return (
            <div className="upload">
                <h1 className="upload__title">Upload Video</h1>
                <div className="upload__content">
                    {/* <UploadVideo/> */}
                    <UploadForm submitHandler={this.submitHandler} />
                </div>
            </div>
        )
    }
}

export default UploadPage