import React, { useEffect, useState } from 'react';
import empData from "../../../server/data-base.json";

const FunctionStudents = () => {

    useEffect(() => {
        document.title = "Function Students Lists";
    }, []);
    
    let [userData] = useState(empData);

    return (
        <div className="pro-div students-div">
            <h1 className='pro-head'>Students Details</h1>
            <div className="product-div">
                {userData.map((x, i) => (
                    <div key={i} className='student-list-div'>
                        <p className='pro-para'> {x.id} </p>
                        <img className='pro-img' src={x.avatar_url} alt={x.avatar_url} />
                        <p className='pro-para'> <b> {x.login} </b> </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FunctionStudents;