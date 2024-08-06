import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../helpers/axiosInstance';
import { useNavigate, useParams } from 'react-router-dom';
import { PiArrowCircleLeftThin } from "react-icons/pi";
import ReactTooltip from 'react-tooltip';
import { toast } from 'react-toastify';

const FunctionViewProduct = () => {

    let [product, setProduct] = useState({
        pname: "",
        pprice: "",
        pqty: "",
    }),

    { id } = useParams(), navigate = useNavigate(),

    viewProducts = () => {
        navigate("/function-view-products");
    },

    { pname, pprice, pqty, pdesc } = product;

    useEffect(() => {
        let fetchProduct = async () => {
            try {
                let { data } = await axiosInstance.get(`/products/${id}`);
                setProduct(data);
                document.title = `${data.pname}`;
            } catch (error) {
                toast.error("Error fetching product data", { autoclose: 750 });
            }
        };

        fetchProduct();
    }, [id]);

    return (
        <>
            <div className="add-div" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h1 className='pro-head'> Function View Product - {pname} </h1>
                <PiArrowCircleLeftThin size={35} className="pro-btn dec-btn" onClick={viewProducts} data-tip data-for="goBack" />
                <ReactTooltip id="goBack" place="bottom" effect="solid">Click here to go products page</ReactTooltip>
            </div>
            <div className="pro-div view-products-div">
                <p>{pname}</p>
                <p>{pprice}</p>
                <p>{pqty}</p>
                <p>{pdesc}</p>
            </div>
        </>
    );
};

export default FunctionViewProduct;