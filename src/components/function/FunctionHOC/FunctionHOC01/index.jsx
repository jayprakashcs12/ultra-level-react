import React from 'react';
import hoc01Img from "../../../../assets/img/background/hcrjs.png";
import FunctionHocMain from '../FunctionHocMain';
import FunctionHOC02 from '../FunctionHOC02';

const FunctionHOC01 = (props) => {

    let { uiDeveloper, subjectName1, subjectName2, subjectName3 } = props.value;

    return (

        <>
            <div className="pro-div hoc-div">
                <div className="main-hoc-div hoc01-div">
                    <h1 className='sub-head'> HOC01 </h1>
                    <img className='hoc-img' src={hoc01Img} alt={hoc01Img} />
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
                                {subjectName1}, {subjectName2}, & {subjectName3}
                            </td>
                        </tr>
                    </table>
                </div>
                <FunctionHOC02 />
            </div>
        </>
    );
};

export default FunctionHocMain(FunctionHOC01);