import React, { useEffect, useState } from 'react';
import { PiArrowCircleLeftThin, PiTelegramLogoThin } from "react-icons/pi";
// import hdImg from "../../../../assets/img/products/app-product.png";
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
    navigate = useNavigate(),

    handleChange = (e) => {

        let { name, value } = e.target;
        setProduct(prevProduct => ({ ...prevProduct, [name]: value }));
    },

    handleAdd = async (e) => {
        e.preventDefault();
        let { pname, poldprice, pnewprice, pqty, pdesc } = product;
        
        if (!pname) {
            toast.warn("All fields are required...!", { autoClose: 750 });
        } else {
            let payload = { pname, poldprice, pnewprice, pqty, pdesc };
            try {
                await axiosInstance.post('/products', payload);
                toast.success(`${pname} added successfully...!`, { autoClose: 750 });
                navigate("/function-view-products");
            } catch (err) {
                toast.warn(err.message, err, { autoClose: 750 });
            }
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
                        <h1 className='pro-head'> image here </h1>
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
                            <input className='product-input' type="number" name='poldprice' value={poldprice} placeholder='Enter Your Product Old Price'
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label className='pro-label' htmlFor="pnewprice"> Product New Price </label>
                            <input className='product-input' type="number" name='pnewprice' value={pnewprice} placeholder='Enter Your Product New Price'
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
                        <PiTelegramLogoThin size={35} className="pro-btn inc-btn" data-tip data-for="updateProduct" onClick={handleAdd} />
                        <ReactTooltip id="addProduct" place="bottom" effect="solid"> Add the product </ReactTooltip>
                    </div>
                </form>
            </div>
        </>
    );
};

export default FunctionAddProduct;