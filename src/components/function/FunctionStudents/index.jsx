import React, { useEffect, useState } from 'react';
import empData from "../../../server/data-base.json";

const FunctionStudents = () => {

    useEffect(() => {
        document.title = "Function Students Lists";
    }, []);
    
    let [userData] = useState(empData);

    return (
        
        <>
            <h1 className='pro-head'>Function Students Details</h1>
            <div className="pro-div students-div">
                <div className="products-div">
                    {userData.map((x, i) => (
                        <div key={i} className='student-list-div'>
                            <p className='student-para'> {i+1} </p>
                            <img className='pro-img' src={x.avatar_url} alt={x.avatar_url} />
                            <p className='student-para'> <b> {x.login} </b> </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default FunctionStudents;