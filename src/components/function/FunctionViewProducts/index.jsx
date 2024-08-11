import React, { useState, useEffect } from 'react';
import { PiPencilThin, PiTrashLight } from "react-icons/pi";
import axiosInstance from '../../helpers/axiosInstance';
import { Link, useNavigate } from 'react-router-dom';
import { CiCirclePlus } from "react-icons/ci";
import { PiEyeThin } from "react-icons/pi";
import ReactTooltip from 'react-tooltip';
import { toast } from 'react-toastify';

const FunctionViewProducts = () => {

    let [products, setProducts] = useState([]), navigate = useNavigate();

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
            console.warn("Error fetching data", err);
        }
    },

    addProduct = () => {
        navigate("/function-add-product");
    },

    calculateDiscount = ({ oldPrice, newPrice }) => {
        let discount = ((oldPrice - newPrice) / oldPrice) * 100;
        return discount.toFixed(2);
    },

    handleDelete = async (id, pname) => {
        let isConfirmed = window.confirm(`Are you sure you want to delete ${pname}?`);
        if (!isConfirmed) {
            return;
        }
        try {
            await axiosInstance.delete(`/products/${id}`);
            fetchData();
            toast.warn(`${pname} deleted successfully...!`, { autoClose: 750 });
        } catch (err) {
            toast.warn("Error deleting product", err, { autoClose: 750 });
            console.error("Error deleting product", err);
        }
    };

    return (
        <>
            <div className="add-div view-prod-btn-div">
                <h1 className='pro-head'>Function View Products</h1>
                <CiCirclePlus size={35} className="pro-btn dec-btn" onClick={addProduct} data-tip data-for="addProduct" />
                <ReactTooltip id="addProduct" place="bottom" effect="solid">Click here to add a new product</ReactTooltip>
            </div>
            <div className="pro-div view-products-div">
                <div className="products-div">
                    {products.map((x, i) => (
                        <div key={x.id} className='product-list-div'>
                            <p className='prod-para'>{i + 1}</p>
                            <p className='prod-para'><b>{x.pname}</b></p>
                            <p className='prod-para price-para'>
                                <strike><b>₹ {x.poldprice} /-</b></strike> 
                                <b>₹ {x.pnewprice} /-</b>
                            </p>
                            <p className='prod-para'>
                                <b> {calculateDiscount({ oldPrice: x.poldprice, newPrice: x.pnewprice })} % </b> 
                            </p>
                            <div className="btn-div act-btn-div">
                                <Link className='act-btn link-btn' to={`/function-view-product/${x.id}`}> 
                                    <PiEyeThin size={35} className="pro-btn view-btn" data-tip data-for={`viewProduct-${x.id}`} />
                                </Link>
                                <ReactTooltip id={`viewProduct-${x.id}`} place="bottom" effect="solid">View the product</ReactTooltip>
                                <PiTrashLight size={35} className="pro-btn reset-btn" onClick={() => handleDelete(x.id, x.pname)} 
                                    data-tip data-for={`deleteProduct-${x.id}`} />
                                <ReactTooltip id={`deleteProduct-${x.id}`} place="bottom" effect="solid">Delete the product</ReactTooltip>
                                <Link className='act-btn link-btn' to={`/function-update-product/${x.id}`}> 
                                    <PiPencilThin size={35} className="pro-btn edit-btn" data-tip data-for={`updateProduct-${x.id}`} />
                                </Link>
                                <ReactTooltip id={`updateProduct-${x.id}`} place="bottom" effect="solid">Update the product</ReactTooltip>
                            </div>   
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default FunctionViewProducts;