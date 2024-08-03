import React, { useState, useRef, useEffect } from 'react';
import axiosInstance from '../../helpers/axiosInstance';
import { MdAttachFile } from "react-icons/md";
import ReactTooltip from 'react-tooltip';
import { CiPower } from "react-icons/ci";
import { toast } from 'react-toastify';

const FunctionImgUpload = () => {

    let [selectedFiles, setSelectedFiles] = useState([]),
        [imagePreviews, setImagePreviews] = useState([]),
        fileInputRef = useRef();

    useEffect(() => {
        document.title = "Function Image Upload";
    }, []);

    let handleFileChange = (e) => {
        let files = Array.from(e.target.files);
        let previews = files.map(file => URL.createObjectURL(file));

        setSelectedFiles(files);
        setImagePreviews(previews);
    },

    handleUpload = async () => {
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
    },

    handleClear = () => {
        setSelectedFiles([]);
        setImagePreviews([]);
        fileInputRef.current.value = null; // clear the file input
        toast.error('Images cleared successfully...!', { autoClose: 750 });
    };

    return (
        <>
            <h1 className='pro-head'> Function Image Upload </h1>
            <div className='pro-div img-upload-div'>
                <div className="main-div multi-img-div">
                    {imagePreviews.length > 0 && (
                        <div className="img-preview">
                            {imagePreviews.map((img, i) => (
                                <img key={i} src={img} alt={`Preview ${i}`} className='img-upload' />
                            ))}
                        </div>
                    )}
                    <input type="file" multiple onChange={handleFileChange} ref={fileInputRef} />
                </div>
                <div className="btn-div">
                    <CiPower className='pro-btn reset-btn' onClick={handleClear} data-tip data-for="resetImage" />
                    <ReactTooltip id="resetImage" place="bottom" effect="solid"> Reset the Image Upload </ReactTooltip>
                    <MdAttachFile className='pro-btn upload-btn' onClick={handleUpload} data-tip data-for="uploadImage" />
                    <ReactTooltip id="uploadImage" place="bottom" effect="solid"> Select Image to Upload </ReactTooltip>
                </div>
            </div>
        </>
    );
};

export default FunctionImgUpload;