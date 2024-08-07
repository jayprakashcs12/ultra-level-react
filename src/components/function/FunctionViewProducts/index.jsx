import React, { useState, useEffect } from 'react';
import { PiPencilThin, PiTrashLight } from "react-icons/pi";
import axiosInstance from '../../helpers/axiosInstance';
import { Link, useNavigate } from 'react-router-dom';
import { CiCirclePlus } from "react-icons/ci";
import { PiEyeThin } from "react-icons/pi";
import ReactTooltip from 'react-tooltip';
import { toast } from 'react-toastify';

const FunctionViewProducts = () => {

    let [products, setProducts] = useState([]),
    navigate = useNavigate();

    useEffect(() => {
        document.title = "Function View Products";
        fetchData();
    }, []);

    let fetchData = async () => {
        try {
            let { data } = await axiosInstance.get("products");
            setProducts(data);
            console.log(data, "data");
        } catch (err) {
            console.error("Error fetching data", err);
        }
    },

    addProduct = () => {
        navigate("/function-add-product");
    },

    handleDelete = async (id, pname) => {

        let isConfirmed = window.confirm(`Are you sure, you want to delete ${pname}...?`);
        if (!isConfirmed) {
            return;
        }
    
        try {
            await axiosInstance.delete(`/products/${id}`);
            toast.error(`${pname} deleted successfully...!`, { autoClose: 750 });
            fetchData();
        } catch (err) {
            console.error("Error deleting product", err);
        }
    };

    return (

        <>
            <div className="add-div view-products-btn-div">
                <h1 className='pro-head'> Function View Products </h1>
                <CiCirclePlus size={35} className="pro-btn dec-btn" onClick={addProduct} data-tip data-for="addProduct" />
                <ReactTooltip id="addProduct" place="bottom" effect="solid"> Click here to add new product </ReactTooltip>
            </div>
            <div className="pro-div view-products-div">
                <div className="products-div">
                    {products.map((x, i) => (
                        <div key={x.id} className='product-list-div'>
                            <p className='product-para'>{i + 1}</p>
                            <p className='product-para'><b>{x.pname}</b></p>
                            <div className="btn-div">
                                <Link className='act-btn link-btn' to={`/function-view-product/${x.id}`}> 
                                    <PiEyeThin size={35} className="pro-btn reset-btn" data-tip data-for="viewProduct" />
                                </Link>
                                <ReactTooltip id="viewProduct" place="bottom" effect="solid"> View the product </ReactTooltip>
                                <PiTrashLight size={35} className="pro-btn inc-btn" onClick={() => handleDelete(x.id, x.pname)} 
                                    data-tip data-for="deleteProduct" />
                                <ReactTooltip id="deleteProduct" place="bottom" effect="solid">Delete the product </ReactTooltip>
                                <Link className='act-btn link-btn' to={`/function-update-product/${x.id}`}> 
                                    <PiPencilThin size={35} className="pro-btn reset-btn" data-tip data-for="updateProduct" />
                                </Link>
                                <ReactTooltip id="updateProduct" place="bottom" effect="solid"> Update the product </ReactTooltip>
                            </div>   
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default FunctionViewProducts;