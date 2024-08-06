import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { CiHome } from "react-icons/ci";

export default function PageNotFound() {

    useEffect(() => {
        document.title = "Page Not Found";
    }, []);

    let navigate = useNavigate(),
    goBack = () => {
        navigate('/home');
    }

    return (
        <>
            <div className="not-found">
                <div className="notfound-bg" />
                <div className="notfound">
                    <div className="notfound-404">
                        <h1 className='pnf-main-head'>404</h1>
                    </div>
                    <h2 className='pnf-sub-head'>we are sorry, but the page you requested was not found</h2>
                    <CiHome size={35} className='pro-btn home-btn' data-tip data-for="pageNotFound" onClick={goBack} />
                    <ReactTooltip id="pageNotFound" place="right" effect="solid"> Go back </ReactTooltip>
                </div>
            </div>
        </>
    )
}