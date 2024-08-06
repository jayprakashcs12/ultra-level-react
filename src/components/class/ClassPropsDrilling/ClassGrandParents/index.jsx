import React, { Component } from 'react';
import productImage from "../../../../assets/img/products/samsung-galaxy.png";
import { CiCircleMinus, CiCirclePlus, CiPower } from "react-icons/ci";
import productsData from "../../../../server/data.json";
import ReactTooltip from 'react-tooltip';
import ClassParents from '../ClassParents';
import { toast } from 'react-toastify';

export default class ClassGrandParents extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    minCount = 0; maxCount = 10; item = "Mobile";

    increment = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    }

    handleDecrement = () => {
        let { count } = this.state, { minCount, item } = this;
        if (count > minCount) {
            this.setState((prevState) => ({ count: prevState.count - 1 }));
            toast.info(`You selected ${count - 1} ${count - 1 < 2 ? `${item}` : `${item}s`}...!`, { autoClose: 1000 });
        } else {
            toast.error(`You can't select less than ${minCount} ${minCount < 1 ? `${item}` : `${item}s`}...!`, { autoClose: 1000 });
        }
    }

    handleIncrement = () => {
        let { count } = this.state, { maxCount, item } = this, maxValue = count + 1;

        if (count < maxCount) {
            this.setState({ count: maxValue });
            toast.success(`You selected ${maxValue} ${maxValue === 1 ? `${item}` : `${item}s`}...!`, { autoClose: 750 });
        } else {
            toast.error(`You can't select more than ${maxCount} ${maxCount === 1 ? `${item}` : `${item}s`}...!`, { autoClose: 750 });
        }
    }

    handleReset = () => {
        let { minCount } = this, itemsReset = window.confirm(`Are you sure, you want to remove all items ?`);

        if (itemsReset) {
            toast.warn(`All items removed successfully...!`, { autoClose: 750 });
            this.setState({ count: minCount });
        }
    }

    render() {

        let { count } = this.state, product = productsData[0];

        return (
            <>
                <div className="pro-div parent-div props-div">
                    <div className="eshop-div class-products-div">
                        <h1 className='sub-head'>Class Grand Parents Details</h1>
                        <h2 className='product-head'> Product Name : <span className='product-desc'> {product?.pname} </span> </h2>
                        <img className='product-img' src={productImage} alt={productImage} />
                        <h3 className='product-head'> Product Price : <span className='product-desc'> ₹ {product?.pprice} /- </span> </h3>
                        <h3 className='product-head'> Product Desc. : <span className='product-desc'> {product?.pdesc} </span> </h3>
                        <h3 className='product-head'> {count} </h3>
                        <div className="btn-div">
                            <CiCircleMinus className="pro-btn dec-btn" onClick={this.handleDecrement} data-tip data-for="dereaseCount" />
                            <ReactTooltip id="dereaseCount" place="bottom" effect="solid"> Decrease the Product </ReactTooltip>
                            <CiPower className="pro-btn reset-btn" onClick={this.handleReset} data-tip data-for="resetCount" />
                            <ReactTooltip id="resetCount" place="bottom" effect="solid"> Reset the Product </ReactTooltip>
                            <CiCirclePlus className="pro-btn inc-btn" onClick={this.handleIncrement} data-tip data-for="increaseCount" />
                            <ReactTooltip id="increaseCount" place="bottom" effect="solid"> Increase the Product </ReactTooltip>
                        </div>
                    </div>
                    <ClassParents paymentsData={productsData} count={count} handleDecrement={this.handleDecrement} 
                        handleReset={this.handleReset} handleIncrement={this.handleIncrement} />
                </div>
            </>
        );
    }
}