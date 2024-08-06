import React, { Component } from 'react';
import productImage from "../../../../assets/img/products/samsung-galaxy.png";
import { CiCircleMinus, CiCirclePlus, CiPower } from 'react-icons/ci';
import ReactTooltip from 'react-tooltip';

export default class ClassChildren extends Component {

    render() {

        let { paymentsData = [], count, handleDecrement, handleIncrement, handleReset } = this.props,
        product = paymentsData[0] || {};

        return (
            <>
                <div className="eshop-div payments-div">
                    <h1 className='sub-head'>Class Children Details</h1>
                    {count > 0 && paymentsData.length > 0 && (
                        <>
                            <h2 className='product-head'> Product Name : <span className='product-desc'> {product?.pname} </span> </h2>
                            <img className='product-img' src={productImage} alt={productImage} />
                            <h3 className='product-head'> Product Price : <span className='product-desc'> ₹ {product?.pprice} /- </span> </h3>
                            <h3 className='product-head'> Product Desc. : <span className='product-desc'> {product?.pdesc} </span> </h3>
                            <h3 className='product-head'> {count} </h3>
                            <div className="btn-div">
                                <CiCircleMinus size={35} className="pro-btn dec-btn" onClick={handleDecrement} data-tip data-for="dereaseCount" />
                                <ReactTooltip id="dereaseCount" place="bottom" effect="solid"> Decrease the Product </ReactTooltip>
                                <CiPower size={35} className="pro-btn reset-btn" onClick={handleReset} data-tip data-for="resetCount" />
                                <ReactTooltip id="resetCount" place="bottom" effect="solid"> Reset the Product </ReactTooltip>
                                <CiCirclePlus size={35} className="pro-btn inc-btn" onClick={handleIncrement} data-tip data-for="increaseCount" />
                                <ReactTooltip id="increaseCount" place="bottom" effect="solid"> Increase the Product </ReactTooltip>
                            </div>
                        </>
                    )}
                </div>
            </>
        );
    }
}