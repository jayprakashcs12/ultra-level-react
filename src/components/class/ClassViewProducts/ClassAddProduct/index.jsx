import React, { Component } from 'react';
import { PiArrowCircleLeftThin, PiPencilThin } from "react-icons/pi";
import axiosInstance from '../../../helpers/axiosInstance';
import { useNavigate } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { CiUndo } from "react-icons/ci";
import { toast } from 'react-toastify';

class AddProduct extends Component {

    componentDidMount() {
        document.title = "Class Add Product";
    }

    constructor(props) {
        super(props);
        this.state = {
            product: {
                pname: "",
                pimg: "",
                pprice: "",
                pqty: "",
                pdesc: ""
            }
        };
        this.viewProducts = this.viewProducts.bind(this);
    }

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState(prevState => ({
            product: { ...prevState.product, [name]: value }
        }));
    }

    handleAdd = async (e) => {
        e.preventDefault();
        let { pname, pprice, pqty } = this.state.product;
        if (!pname || !pprice || !pqty) {
            toast.error("All fields are required...!", {autoclose: 750});
        } else {
            let payload = { pname, pprice, pqty };
            try {
                await axiosInstance.post('/products', payload);
                toast.success(`${pname} added successfully...!`, {autoclose: 750});
                this.props.router.navigate("/class-view-products");
            } catch (err) {
                toast.error(err.message, {autoclose: 750});
            }
        }
    }

    handleClear = () => {
        this.setState({
            product: { pname: "", pprice: "", pqty: "", pdesc: "", pimg: "" }
        });
    }

    viewProducts() {
        this.props.router.navigate("/class-view-products");
    }

    render() {
        
        let { pname, pimg, pprice, pqty, pdesc } = this.state.product;

        return (
            <>
                <div className="add-div" style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <h1 className='pro-head'> Add New Product </h1>
                    <PiArrowCircleLeftThin className="pro-btn dec-btn" onClick={this.viewProducts} data-tip data-for="goBack" />
                    <ReactTooltip id="goBack" place="bottom" effect="solid"> Click here to go to products page </ReactTooltip>
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
                            <CiUndo className="pro-btn reset-btn" data-tip data-for="clearFields" onClick={this.handleClear} />
                            <ReactTooltip id="clearFields" place="bottom" effect="solid"> Clear the product fields </ReactTooltip>
                            <PiPencilThin className="pro-btn inc-btn" data-tip data-for="addProduct" onClick={this.handleAdd} />
                            <ReactTooltip id="addProduct" place="bottom" effect="solid"> Add the product </ReactTooltip>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let navigate = useNavigate();
        return (
            <Component {...props} router={{ navigate }} />
        );
    }

    return ComponentWithRouterProp;
}

export default withRouter(AddProduct);