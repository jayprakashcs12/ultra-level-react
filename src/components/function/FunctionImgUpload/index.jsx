import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '../../helpers/axiosInstance';

const FunctionImgUpload = () => {

    useEffect(() => {
        document.title = "Function Image Upload";
    }, []);

    let [selectedFiles, setSelectedFiles] = useState([]),
        [imagePreviews, setImagePreviews] = useState([]),
        fileInputRef = useRef(),

    handleFileChange = (event) => {
        let files = Array.from(event.target.files);
        let previews = files.map(file => URL.createObjectURL(file));

        setSelectedFiles(files);
        setImagePreviews(previews);
    },

    handleUpload = async () => {
        let formData = new FormData();

        selectedFiles.forEach(file => {
            formData.append('images', file);
        });

        try {
            let response = await axiosInstance.post('images', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            toast.success('Images uploaded successfully...!');
            console.log(response.data);
        } catch (err) {
            toast.error(err.message);
            console.error(err);
        }
    };

    return (
        <div className='pro-div img-upload-div'>
            <input type="file" multiple onChange={handleFileChange} ref={fileInputRef} />
            <div>
                {imagePreviews.map((img, i) => (
                    <img key={i} src={img} alt={`Preview ${i}`} className='img-upload' />
                ))}
            </div>
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default FunctionImgUpload;