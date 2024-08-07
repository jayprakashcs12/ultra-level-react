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

    let [product, setProduct] = useState({ pname: "", pprice: "", pqty: "", pdesc: "", pimg: "" }),

    navigate = useNavigate(),

    handleChange = (e) => {
        let { name, value } = e.target;
        setProduct(prevProduct => ({
            ...prevProduct, [name]: value
        }));
    },

    handleAdd = async (e) => {
        e.preventDefault();
        let { pname, pprice, pqty } = product;
        if (!pname || !pprice || !pqty) {
            toast.error("All fields are required...!", { autoClose: 750 });
        } else {
            let payload = { pname, pprice, pqty };
            try {
                await axiosInstance.post('/products', payload);
                toast.success(`${pname} added successfully...!`, { autoClose: 750 });
                navigate("/fuction-view-products");
            } catch (err) {
                toast.error(err.message, { autoClose: 750 });
            }
        }
    },

    handleClear = () => {
        setProduct({
            pname: "", pprice: "", pqty: "", pdesc: "", pimg: ""
        });
    };

    let { pname, pimg, pprice, pqty, pdesc } = product;

    return (
        <>
            <div className="add-div" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h1 className='pro-head'> Add New Product </h1>
                <PiArrowCircleLeftThin size={35} className="pro-btn dec-btn" onClick={() => navigate("/function-view-products")} data-tip data-for="goBack" />
                <ReactTooltip id="goBack" place="bottom" effect="solid"> Click here to go to products page </ReactTooltip>
            </div>
            <div className="pro-div view-products-div">
                <form className='pro-state'>
                    <div className="pro-row-data">
                        <div className="form-group">
                            <label className='pro-label' htmlFor="pname"> Product Name </label>
                            <input className='product-input' type="text" name='pname' value={pname} placeholder='Enter Your Product Name'
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label className='pro-label' htmlFor="pimg"> Product Image </label>
                            <input className='product-input' type="text" name='pimg' value={pimg} placeholder='Enter Your Product Image URL'
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="pro-row-data">
                        <div className="form-group">
                            <label className='pro-label' htmlFor="pprice"> Product Price </label>
                            <input className='product-input' type="number" name='pprice' value={pprice} placeholder='Enter Your Product Price'
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