import React, { Component } from 'react';
import { PiPencilThin, PiTrashLight } from "react-icons/pi";
import axiosInstance from '../../helpers/axiosInstance';
import { Link, useNavigate } from 'react-router-dom';
import { CiCirclePlus } from "react-icons/ci";
import { PiEyeThin } from "react-icons/pi";
import ReactTooltip from 'react-tooltip';
import { toast } from 'react-toastify';

class ClassViewProducts extends Component {

    constructor(props) {
        super(props);
        this.state = { products: [] };
        this.addProduct = this.addProduct.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        document.title = "Class View Products";
        this.fetchData();
    }

    async fetchData() {
        try {
            let { data } = await axiosInstance.get("products");
            this.setState({ products: data });
            console.log(data, "data");
        } catch (err) {
            console.warn("Error fetching data", err);
        }
    }

    addProduct() {
        this.props.navigate("/class-add-product");
    }

    calculateDiscount({ oldPrice, newPrice }) {
        let discount = ((oldPrice - newPrice) / oldPrice) * 100;
        return discount.toFixed(2);
    }

    async handleDelete(id, pname) {
        let isConfirmed = window.confirm(`Are you sure, you want to delete ${pname}...?`);
        if (!isConfirmed) {
            return;
        }

        try {
            await axiosInstance.delete(`/products/${id}`);
            toast.warn(`${pname} deleted successfully...!`);
            this.fetchData();
        } catch (err) {
            console.error("Error deleting product", err);
        }
    }

    render() {
        return (
            <>
                <div className="add-div view-prod-btn-div">
                    <h1 className='pro-head'>Class View Products</h1>
                    <CiCirclePlus size={35} className="pro-btn dec-btn" onClick={this.addProduct} data-tip data-for="addProduct" />
                    <ReactTooltip id="addProduct" place="bottom" effect="solid"> Click here to add a new product </ReactTooltip>
                </div>
                <div className="pro-div view-products-div">
                    <div className="products-div">
                        {this.state.products.map((x, i) => (
                            <div key={x.id} className='product-list-div'>
                                <p className='prod-para'>{i + 1}</p>
                                <p className='prod-para'><b>{x.pname}</b></p>
                                <p className='prod-para price-para'>
                                    <strike><b>₹ {x.poldprice} /-</b></strike> 
                                    <b>₹ {x.pnewprice} /-</b>
                                </p>
                                <p className='prod-para'>
                                    <b> {this.calculateDiscount({ oldPrice: x.poldprice, newPrice: x.pnewprice })} % </b> 
                                </p>
                                <div className="btn-div">
                                    <Link className='act-btn link-btn' to={`/class-view-product/${x.id}`}> 
                                        <PiEyeThin size={35} className="pro-btn reset-btn" data-tip data-for={`viewProduct-${x.id}`} />
                                    </Link>
                                    <ReactTooltip id={`viewProduct-${x.id}`} place="bottom" effect="solid"> View the product </ReactTooltip>
                                    <PiTrashLight size={35} className="pro-btn inc-btn" onClick={() => this.handleDelete(x.id, x.pname)} 
                                        data-tip data-for={`deleteProduct-${x.id}`} />
                                    <ReactTooltip id={`deleteProduct-${x.id}`} place="bottom" effect="solid">Delete the product </ReactTooltip>
                                    <Link className='act-btn link-btn' to={`/class-update-product/${x.id}`}> 
                                        <PiPencilThin size={35} className="pro-btn reset-btn" data-tip data-for={`updateProduct-${x.id}`} />
                                    </Link>
                                    <ReactTooltip id={`updateProduct-${x.id}`} place="bottom" effect="solid"> Update the product </ReactTooltip>
                                </div>   
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }
}

function withNavigate(Component) {
    return function(props) {
        let navigate = useNavigate();
        return <Component {...props} navigate={navigate} />;
    }
}

export default withNavigate(ClassViewProducts);