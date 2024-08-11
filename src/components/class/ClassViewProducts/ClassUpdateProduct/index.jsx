import React, { Component } from 'react';
import { PiArrowCircleLeftThin, PiTelegramLogoThin } from 'react-icons/pi';
import axiosInstance from '../../../helpers/axiosInstance';
import { useNavigate, useParams } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { CiUndo } from "react-icons/ci";
import { toast } from 'react-toastify';

class ClassUpdateProduct extends Component {

    constructor(props) {
        super(props);
        this.state = { product: { pname: "", pimg: "", pprice: "", pqty: "", pdesc: "" }};
        this.viewProducts = this.viewProducts.bind(this);
    }

    async componentDidMount() {

        let { id } = this.props.router.params;

        try {
            let { data } = await axiosInstance.get(`/products/${id}`);
            this.setState({ product: data }, () => {
                document.title = `Update ${data.pname}`;
            });
        } catch (err) {
            toast.warn("Error fetching product data : ", err, { autoClose: 750 });
        }
    }

    handleChange = (e) => {

        let { name, value } = e.target;

        this.setState(prevState => ({
            product: { ...prevState.product, [name]: value }
        }));
    }

    handleUpdate = async (e) => {
        e.preventDefault();

        let { id } = this.props.router.params, { pname, pprice, pqty } = this.state.product;

        if (!pname || !pprice || !pqty) {
            toast.warn("All fields are required...!", { autoClose: 750 });
        } else {
            let payload = { pname, pprice, pqty };
            try {
                await axiosInstance.put(`/products/${id}`, payload);
                toast.success(`${pname} updated Successfully...!`, { autoClose: 750 });
                this.props.router.navigate("/class-view-products");
            } catch (err) {
                toast.warn(err.message, { autoClose: 750 });
            }
        }
    }

    handleClear = () => {
        this.setState({ product: { pname: "", pprice: "", pqty: "", pdesc: "", pimg: "" } });
    }

    viewProducts() {
        this.props.router.navigate("/class-view-products");
    }

    render() {

        let { pname, pimg, pprice, pqty, pdesc } = this.state.product;

        return (
            <>
                <div className="add-div" style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <h1 className='pro-head'> Class Update Product - {pname} </h1>
                    <PiArrowCircleLeftThin size={35} className="pro-btn dec-btn" onClick={this.viewProducts} data-tip data-for="goBack" />
                    <ReactTooltip id="goBack" place="bottom" effect="solid"> Click here to go products page </ReactTooltip>
                </div>
                <div className="pro-div view-products-div">
                    <form className='pro-state'>
                        <div className="pro-row-data">
                            <div className="form-group">
                                <label className='pro-label' htmlFor="pname"> Product Name </label>
                                <input className='product-input' type="text" name='pname' value={pname} placeholder='Enter Your Product Name'
                                    onChange={this.handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label className='pro-label' htmlFor="pimg"> Product Image </label>
                                <input className='product-input' type="text" name='pimg' value={pimg} placeholder='Enter Your Product Image URL'
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div className="pro-row-data">
                            <div className="form-group">
                                <label className='pro-label' htmlFor="pprice"> Product Price </label>
                                <input className='product-input' type="number" name='pprice' value={pprice} placeholder='Enter Your Product Price'
                                    onChange={this.handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label className='pro-label' htmlFor="pqty"> Product Quantity </label>
                                <input className='product-input' type="number" name='pqty' value={pqty} placeholder='Enter Your Product Quantity'
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className='pro-label' htmlFor="pdesc"> Product Description </label>
                            <textarea className='product-textarea' name='pdesc' value={pdesc} placeholder='Enter Your Product Description'
                                onChange={this.handleChange} rows="2" cols="50"
                            ></textarea>
                        </div>

                        <div className="btn-div">
                            <CiUndo size={35} className="pro-btn reset-btn" data-tip data-for="updateProduct" onClick={this.handleClear} />
                            <ReactTooltip id="updateProduct" place="bottom" effect="solid"> Clear the product fields </ReactTooltip>
                            <PiTelegramLogoThin size={35} className="pro-btn inc-btn" data-tip data-for="updateProduct" onClick={this.handleUpdate} />
                            <ReactTooltip id="updateProduct" place="bottom" effect="solid"> Update the product </ReactTooltip>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let params = useParams(),
        navigate = useNavigate();
        return (
            <Component {...props} router={{ params, navigate }} />
        );
    }

    return ComponentWithRouterProp;
}

export default withRouter(ClassUpdateProduct);