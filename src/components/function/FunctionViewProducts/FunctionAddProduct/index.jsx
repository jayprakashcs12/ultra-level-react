import React, { useEffect, useState } from 'react';
import { PiArrowCircleLeftThin, PiPencilThin } from "react-icons/pi";
import axiosInstance from '../../../helpers/axiosInstance';
import { useNavigate } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { CiUndo } from "react-icons/ci";
import { toast } from 'react-toastify';

const FunctionAddProduct = () => {

    useEffect(() => {
        document.title = "Function Add Product";
    }, []);

    let [product, setProduct] = useState({ pname: "", poldprice: "", pnewprice: "", pqty: "", pdesc: "" }),
    [imageData, setImageData] = useState(null),

    navigate = useNavigate(),

    handleChange = (e) => {

        let { name, value } = e.target;
        setProduct(prevProduct => ({ ...prevProduct, [name]: value }));
    },

    handleAdd = async (e) => {
        e.preventDefault();
        let { pname, poldprice, pnewprice, pqty } = product;
        if (!pname || !poldprice || !pqty) {
            toast.warn("All fields are required...!", { autoClose: 750 });
        } else {
            let payload = { pname, poldprice, pqty };
            try {
                await axiosInstance.post('/products', payload);
                toast.success(`${pname} added successfully...!`, { autoClose: 750 });
                navigate("/fuction-view-products");
            } catch (err) {
                toast.warn(err.message, { autoClose: 750 });
            }
        }
    },

    onFileChange = (e) => {
        let files = e.target.files;
        if (files.length > 0) {
            let file = files[0], reader = new FileReader();
            reader.onload = (e) => {
                setImageData(e.target.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImageData(null);
        }
    },

    handleClear = () => {
        setProduct({ pname: "", poldprice: "", pnewprice:"", pqty: "", pdesc: "" });
    },

    { pname, poldprice, pnewprice, pqty, pdesc } = product;

    return (
        
        <>
            <div className="add-div view-prod-btn-div">
                <h1 className='pro-head'> Add New Product </h1>
                <PiArrowCircleLeftThin size={35} className="pro-btn dec-btn" onClick={() => navigate("/function-view-products")} data-tip data-for="goBack" />
                <ReactTooltip id="goBack" place="bottom" effect="solid"> Click here to go to products page </ReactTooltip>
            </div>
            <div className="pro-div view-products-div">
                <form className='pro-state'>
                    <div className="pro-row-data img-row-data">
                        {imageData ? 
                            <img src={imageData} alt="Preview" className='content-img' /> 
                            :
                            <input type="file" accept="image/*" onChange={onFileChange} />
                        }
                    </div>
                    <div className="pro-row-data">
                        <div className="form-group">
                            <label className='pro-label' htmlFor="pname"> Product Name </label>
                            <input className='product-input' type="text" name='pname' value={pname} placeholder='Enter Your Product Name'
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label className='pro-label' htmlFor="pqty"> Product Quantity </label>
                            <input className='product-input' type="number" name='pqty' value={pqty} placeholder='Enter Your Product Quantity'
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="pro-row-data">
                        <div className="form-group">
                            <label className='pro-label' htmlFor="poldprice"> Product Old Price </label>
                            <input className='product-input' type="number" name='poldprice' value={poldprice} placeholder='Enter Your Product Price'
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label className='pro-label' htmlFor="pnewprice"> Product New Price </label>
                            <input className='product-input' type="number" name='pnewprice' value={pnewprice} placeholder='Enter Your Product Price'
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className='pro-label' htmlFor="pdesc"> Product Description </label>
                        <textarea className='product-textarea' name='pdesc' value={pdesc} placeholder='Enter Your Product Description'
                            onChange={handleChange} rows="2" cols="50"
                        ></textarea>
                    </div>

                    <div className="btn-div">
                        <CiUndo size={35} className="pro-btn reset-btn" data-tip data-for="clearProduct" onClick={handleClear} />
                        <ReactTooltip id="clearProduct" place="bottom" effect="solid"> Clear the product fields </ReactTooltip>
                        <PiPencilThin size={35} className="pro-btn inc-btn" data-tip data-for="updateProduct" onClick={handleAdd} />
                        <ReactTooltip id="addProduct" place="bottom" effect="solid"> Add the product </ReactTooltip>
                    </div>
                </form>
            </div>
        </>
    );
};

export default FunctionAddProduct;