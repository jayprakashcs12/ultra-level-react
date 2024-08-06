import React, { Component, createRef } from 'react';
import axiosInstance from '../../helpers/axiosInstance';
import { MdAttachFile } from "react-icons/md";
import ReactTooltip from 'react-tooltip';
import { CiPower } from "react-icons/ci";
import { toast } from 'react-toastify';

export default class ClassImgUpload extends Component {

    componentDidMount() {
        document.title = "Class Image Upload";
    }

    constructor(props) {
        super(props);
        this.state = {
            selectedFiles: [],
            imagePreviews: []
        };
        this.fileInputRef = createRef();
    }

    handleFileChange = (e) => {
        let files = Array.from(e.target.files);
        let imagePreviews = files.map(file => URL.createObjectURL(file));

        this.setState({
            selectedFiles: files,
            imagePreviews
        });
    };

    handleUpload = async () => {
        let { selectedFiles } = this.state;

        if (selectedFiles.length === 0) {
            toast.error('Please select at least 1 image to upload...!', { autoClose: 750 });
            return;
        }

        let formData = new FormData();
        selectedFiles.forEach(file => formData.append('images', file));

        try {
            let resp = await axiosInstance.post('images', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Image uploaded successfully...!', resp);
            toast.success('Image uploaded successfully...!', { autoClose: 750 });
        } catch (err) {
            console.error('Error uploading the image:', err);
            toast.error('Error uploading the image. Please try again...!', { autoClose: 750 });
        }
    };

    handleClear = () => {
        this.setState({
            selectedFiles: [],
            imagePreviews: []
        });
        this.fileInputRef.current.value = null; // clear the file input
        toast.error('Images cleared successfully...!', { autoClose: 750 });
    };

    render() {
        let { imagePreviews } = this.state;

        return (
            <>
                <h1 className='pro-head'> Class Image Upload </h1>
                <div className='pro-div img-upload-div'>
                    <div className="main-div multi-img-div">
                        {imagePreviews && imagePreviews.length > 0 && (
                            <div className="img-preview">
                                {imagePreviews.map((img, i) => (
                                    <img key={i} src={img} alt={`Preview ${i}`} className='img-upload' />
                                ))}
                            </div>
                        )}
                        <input type="file" multiple onChange={this.handleFileChange} ref={this.fileInputRef} />
                    </div>
                    <div className="btn-div">
                        <CiPower className='pro-btn reset-btn' onClick={this.handleClear} data-tip data-for="resetImage" />
                        <ReactTooltip id="resetImage" place="bottom" effect="solid"> Reset the Image Upload </ReactTooltip>
                        <MdAttachFile className='pro-btn upload-btn' onClick={this.handleUpload} data-tip data-for="uploadImage" />
                        <ReactTooltip id="uploadImage" place="bottom" effect="solid"> Select Image to Upload </ReactTooltip>
                    </div>
                </div>
            </>
        );
    }
}