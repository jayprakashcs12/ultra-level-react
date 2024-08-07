import React, { Component } from 'react';
import axiosInstance from '../../../helpers/axiosInstance';
import { useNavigate, useParams } from 'react-router-dom';
import { PiArrowCircleLeftThin } from "react-icons/pi";
import ReactTooltip from 'react-tooltip';
import { toast } from 'react-toastify';

class ClassViewProduct extends Component {

    constructor(props) {
        super(props);
        this.state = { product: { pname: "", pprice: "", pqty: "" } };
        this.viewProducts = this.viewProducts.bind(this);
    }

    async componentDidMount() {
        let { id } = this.props.router.params;
        try {
            let { data } = await axiosInstance.get(`/products/${id}`);
            this.setState({ product: data }, () => {
                document.title = `${data.pname}`;
            });
        } catch (err) {
            toast.error("Error fetching product data", err, { autoClose: 750 });
        }
    }

    viewProducts() {
        this.props.router.navigate("/class-view-products");
    }

    render() {
        
        let { pname, pprice, pqty, pdesc } = this.state.product;

        return (
            <>
                <div className="add-div view-products-btn-div">
                    <h1 className='pro-head'> Class View Product  - {pname} </h1>
                    <PiArrowCircleLeftThin size={35} className="pro-btn dec-btn" onClick={this.viewProducts} data-tip data-for="goBack" />
                    <ReactTooltip id="goBack" place="bottom" effect="solid"> Click here to go products page </ReactTooltip>
                </div>
                <div className="pro-div view-products-div">
                    <p>{pname}</p>
                    <p>{pprice}</p>
                    <p>{pqty}</p>
                    <p>{pdesc}</p>
                </div>
            </>
        );
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let params = useParams(), navigate = useNavigate();
        return ( 
            <Component {...props} router={{ params, navigate }} />
        );
    }

    return ComponentWithRouterProp;
}

export default withRouter(ClassViewProduct);