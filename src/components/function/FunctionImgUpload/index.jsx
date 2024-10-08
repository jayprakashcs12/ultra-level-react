import React, { useState, useRef, useEffect } from 'react';
import imgUpload from "../../../assets/img/background/chennai-exp-02.jpg";
import axiosInstance from '../../helpers/axiosInstance';
import { PiUploadSimpleThin } from "react-icons/pi";
import ReactTooltip from 'react-tooltip';
import { CiPower } from "react-icons/ci";
import { toast } from 'react-toastify';

const FunctionImgUpload = () => {

    useEffect(() => {
        document.title = "Function Image Upload";
    }, []);

    let [selectFiles, setSelectFiles] = useState([]), [imgPreviews, setImgPreviews] = useState([]), fileInputRef = useRef(),

    handleFileChange = (e) => {
        let files = Array.from(e.target.files),
        previews = files.map(file => URL.createObjectURL(file));
        setSelectFiles(files);
        setImgPreviews(previews);
    },

    handleUpload = async () => {

        if (selectFiles.length === 0) {
            toast.warn('Please select at least 1 image to upload...!', { autoClose: 750 });
            return;
        }

        let formData = new FormData();
        selectFiles.forEach(file => formData.append('images', file));

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
    },

    handleClear = () => {
        setSelectFiles([]);
        setImgPreviews([]);
        fileInputRef.current.value = null; 
        toast.warn('Images cleared successfully...!', { autoClose: 750 });
    };

    return (
        <>
            <h1 className='pro-head'> Function Image Upload </h1>
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
                    <input className='file-upload' type="file" multiple onChange={handleFileChange} ref={fileInputRef} />
                </div>
                <div className="btn-div">
                    <CiPower size={35} className='pro-btn reset-btn' onClick={handleClear} data-tip data-for="resetImage" />
                    <ReactTooltip id="resetImage" place="bottom" effect="solid"> Reset the Image Upload </ReactTooltip>
                    <PiUploadSimpleThin size={35} className='pro-btn upload-btn' onClick={handleUpload} data-tip data-for="uploadImage" />
                    <ReactTooltip id="uploadImage" place="bottom" effect="solid"> Select Image to Upload </ReactTooltip>
                </div>
            </div>
        </>
    );
};

export default FunctionImgUpload;