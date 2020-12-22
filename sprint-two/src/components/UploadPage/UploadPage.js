import React from 'react'
import './UploadPage.scss';
import UploadForm from '../../components/UploadForm/UploadForm';
import UploadVideo from '../../components/UploadVideo/UploadVideo';

// UploadPage Component returns JSX for the upload page
export default function UploadPage() {
    return (
        <div className="upload">
            <h1 className="upload__title">Upload Video</h1>
            <div className="upload__content">
                <UploadVideo/>
                <UploadForm/>
            </div>
        </div>
    )
}
