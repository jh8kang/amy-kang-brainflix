import './UploadForm.scss';
import React from 'react';

// UploadForm Component returns JSX for the form on upload page
function UploadForm() {
    return (
            <form className="upload-form">
                <label className="upload-form__title" htmlFor="videoTitle">TITLE YOUR VIDEO</label>
                <input className="upload-form__title-input"id="videoTitle" type="text" placeholder="Add a title to your video"/>
                <label className="upload-form__description" htmlFor="videoDescription">ADD A VIDEO DESCRIPTION</label>
                <textarea className="upload-form__description-input" id="videoDescription"name="videoDescription" placeholder="Add a description of your video" />
                <div className="upload-form__buttons">
                    <button className="upload-form__buttons-publish">PUBLISH</button>
                    <button className="upload-form__buttons-cancel">CANCEL</button>
                </div>
            </form>
    )
}

export default UploadForm
