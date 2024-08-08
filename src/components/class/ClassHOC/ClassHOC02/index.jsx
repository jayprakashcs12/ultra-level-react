import React, { Component } from 'react';
import hoc02Img from "../../../../assets/img/background/hcajs.png";
import ClassHocMain from '../ClassHocMain';

class FunctionHOC02 extends Component {

    render() {

        let { uiDeveloper, subject1, subject2, subject4 } = this.props.value;

        return (
            
            <>
                <div className="main-hoc-div hoc02-div">
                    <h1 className='sub-head'> HOC02 </h1>
                    <img className='hoc-img' src={hoc02Img} alt="HOC02 Image" />
                    <table>
                        <tbody>
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
                                    {subject1}, {subject2}, & {subject4}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>

        );
    }
}

export default ClassHocMain(FunctionHOC02);