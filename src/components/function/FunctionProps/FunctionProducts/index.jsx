import React, { useState } from 'react';
import productImage from "../../../../assets/img/products/samsung-galaxy.png";
import { CiCircleMinus, CiCirclePlus, CiPower } from "react-icons/ci";
import productsData from "../../../../server/data.json";
import FunctionPayments from '../FunctionPayments';
import ReactTooltip from 'react-tooltip';
import { toast } from 'react-toastify';

const FunctionProducts = () => {

    let [count, setCount] = useState(0),
    minCount = 0, maxCount = 10, item = "Mobile", product = productsData[0],

    handleDecrement = () => {
        if (count > minCount) {
            setCount(prevCount => prevCount - 1);
            toast.info(`You selected ${count - 1} ${count - 1 < 2 ? item : `${item}s`}...!`, { autoClose: 1000 });
        } else {
            toast.error(`You can't select less than ${minCount} ${minCount < 1 ? item : `${item}s`}...!`, { autoClose: 1000 });
        }
    },

    handleIncrement = () => {
        let maxValue = count + 1;
        if (count < maxCount) {
            setCount(maxValue);
            toast.success(`You selected ${maxValue} ${maxValue === 1 ? item : `${item}s`}...!`, { autoClose: 750 });
        } else {
            toast.error(`You can't select more than ${maxCount} ${maxCount === 1 ? item : `${item}s`}...!`, { autoClose: 750 });
        }
    },

    handleReset = () => {
        let itemsReset = window.confirm(`Are you sure, you want to remove all items ?`);
        if (itemsReset) {
            toast.warn(`All items removed successfully...!`, { autoClose: 750 });
            setCount(minCount);
        }
    };

    return (
        <>
            <div className="pro-div parent-div props-div">
                <div className="eshop-div function-products-div">
                    <h1 className='sub-head'>Function Products Details</h1>
                    <h2 className='product-head'> Product Name : <span className='product-desc'> {product?.pname} </span> </h2>
                    <img className='product-img' src={productImage} alt={productImage} />
                    <h3 className='product-head'> Product Price : <span className='product-desc'> ₹ {product?.pprice} /- </span> </h3>
                    <h3 className='product-head'> Product Desc. : <span className='product-desc'> {product?.pdesc} </span> </h3>
                    <h3 className='product-head'> {count} </h3>
                    <div className="btn-div">
                        <CiCircleMinus size={35} className="pro-btn dec-btn" onClick={handleDecrement} data-tip data-for="decreaseCount" />
                        <ReactTooltip id="decreaseCount" place="bottom" effect="solid"> Decrease the Product </ReactTooltip>
                        <CiPower size={35} className="pro-btn reset-btn" onClick={handleReset} data-tip data-for="resetCount" />
                        <ReactTooltip id="resetCount" place="bottom" effect="solid"> Reset the Product </ReactTooltip>
                        <CiCirclePlus size={35} className="pro-btn inc-btn" onClick={handleIncrement} data-tip data-for="increaseCount" />
                        <ReactTooltip id="increaseCount" place="bottom" effect="solid"> Increase the Product </ReactTooltip>
                    </div>
                </div>
                <FunctionPayments paymentsData={productsData} count={count} handleDecrement={handleDecrement} 
                    handleReset={handleReset} handleIncrement={handleIncrement} />
            </div>
        </>
    );
};

export default FunctionProducts;