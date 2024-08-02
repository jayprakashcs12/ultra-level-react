import React, { Component } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '../../helpers/axiosInstance';

class ClassImgUpload extends Component {

    componentDidMount() {
        document.title = "Class Image Upload";
    }

    constructor(props) {
        super(props);
        this.state = {
            selectedFiles: [],
            imagePreviews: []
        };
        this.fileInputRef = React.createRef();
    }

    handleFileChange = (event) => {
        let files = Array.from(event.target.files),
        imagePreviews = files.map(file => URL.createObjectURL(file));

        this.setState({
            selectedFiles: files,
            imagePreviews
        });
    };

    handleUpload = async () => {
        let { selectedFiles } = this.state, formData = new FormData();

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
            toast.error(err);
            console.error(err);
        }
    };

    render() {
        const { imagePreviews } = this.state;

        return (
            <div className='pro-div img-upload-div'>
                <input type="file" multiple onChange={this.handleFileChange} ref={this.fileInputRef} />
                <div>
                    {imagePreviews.map((img, i) => (
                        <img key={i} src={img} alt={`Preview ${i}`} className='img-upload' />
                    ))}
                </div>
                <button onClick={this.handleUpload}>Upload</button>
            </div>
        );
    }
}

export default ClassImgUpload;