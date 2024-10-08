import React, { Component, createRef } from 'react';
import imgUpload from "../../../assets/img/background/chennai-exp-02.jpg";
import { PiUploadSimpleThin, PiPowerThin } from "react-icons/pi";
import axiosInstance from '../../helpers/axiosInstance';
import ReactTooltip from 'react-tooltip';
import { toast } from 'react-toastify';

export default class ClassImgUpload extends Component {

    componentDidMount() {
        document.title = "Class Image Upload";
    }

    constructor(props) {
        super(props);
        this.state = { selectedFiles: [], imgPreviews: [] };
        this.fileInputRef = createRef();
    }

    handleFileChange = (e) => {
        let files = Array.from(e.target.files),
        imgPreviews = files.map(file => URL.createObjectURL(file));
        this.setState({ selectedFiles: files, imgPreviews });
    };

    handleUpload = async () => {

        let { selectedFiles } = this.state;
        if (selectedFiles.length === 0) {
            toast.warn('Please select at least 1 image to upload...!', { autoClose: 750 });
            return;
        }

        let formData = new FormData();
        selectedFiles.forEach(file => formData.append('images', file));

        try {
            let resp = await axiosInstance.post('/imagesData', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            console.log('Image uploaded successfully...!', resp);
            toast.success('Image uploaded successfully...!', { autoClose: 750 });
        } catch (err) {
            console.error('Error uploading the image:', err);
            toast.warn('Error uploading the image. Please try again...!', { autoClose: 750 });
        }
    };

    handleClear = () => {
        this.setState({ selectedFiles: [], imgPreviews: [] });
        this.fileInputRef.current.value = null;
        toast.warn('Images cleared successfully...!', { autoClose: 750 });
    };

    render() {
        
        let { imgPreviews } = this.state;

        return (
            <>
                <h1 className='pro-head'> Class Image Upload </h1>
                <div className='pro-div img-upload-div'>
                    <div className="main-div multi-img-div">
                        {imgPreviews && imgPreviews.length > 0 ? (
                            <div className="img-preview">
                                {imgPreviews.map((img, i) => (
                                    <img key={i} src={img} alt={`Preview ${i}`} className='img-upload' />
                                ))}
                            </div>
                        ) : (
                            <>
                                <img src={imgUpload} alt={imgUpload} className='content-img' /> 
                            </>
                        )}
                        <input className='file-upload' type="file" multiple onChange={this.handleFileChange} ref={this.fileInputRef} /> 
                    </div>
                    <div className="btn-div">
                        <PiPowerThin size={35} className='pro-btn reset-btn' onClick={this.handleClear} data-tip data-for="resetImage" />
                        <ReactTooltip id="resetImage" place="bottom" effect="solid"> Reset the Image Upload </ReactTooltip>
                        <PiUploadSimpleThin size={35} className='pro-btn upload-btn' onClick={this.handleUpload} data-tip data-for="uploadImage" />
                        <ReactTooltip id="uploadImage" place="bottom" effect="solid"> Select Image to Upload </ReactTooltip>
                    </div>
                </div>
            </>
        );
    }
}