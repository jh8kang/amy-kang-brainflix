import React from 'react'
import './UploadPage.scss';
import UploadForm from '../../components/UploadForm/UploadForm';
import UploadVideo from '../../components/UploadVideo/UploadVideo';


export default function UploadPage() {
    return (
        <div>
            <h1>Upload Video</h1>
            <div>
                <UploadVideo/>
                <UploadForm/>

            </div>
            
        </div>
    )
}
