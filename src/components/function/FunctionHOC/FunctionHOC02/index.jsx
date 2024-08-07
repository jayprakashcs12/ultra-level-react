import React from 'react';
import hoc02Img from "../../../../assets/img/background/hcajs.png";
import FunctionHocMain from '../FunctionHocMain';

const FunctionHOC02 = (props) => {

    let { uiDeveloper, subjectName1, subjectName2, subjectName4 } = props.value;

    return (

        <>
            <div className="main-hoc-div hoc02-div">
                <h1 className='sub-head'> HOC02 </h1>
                <img className='hoc-img' src={hoc02Img} alt={hoc02Img} />
                <table>
                    <tr>
                        <td className='hoc-para'>
                            Developer Name -
                        </td>
                        <td className='hoc-para'>
                            {uiDeveloper}
                        </td>
                    </tr>
                    <tr>
                        <td className='hoc-para'>
                            Technology used -
                        </td>
                        <td className='hoc-para'>
                            {subjectName1}, {subjectName2}, & {subjectName4}
                        </td>
                    </tr>
                </table>
            </div>
        </>
    );
};

export default FunctionHocMain(FunctionHOC02);