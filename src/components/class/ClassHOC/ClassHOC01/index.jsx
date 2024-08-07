import React, { Component } from 'react';
import hoc01Img from "../../../../assets/img/background/hcrjs.png";
import ClassHocMain from '../ClassHocMain';
import ClassHOC02 from '../ClassHOC02';

class ClassHOC01 extends Component {

    render() {

        let { uiDeveloper, subjectName1, subjectName2, subjectName3 } = this.props.value;

        return (
            
            <>
                <div className="pro-div hoc-div">
                    <div className="main-hoc-div hoc01-div">
                        <h1 className='sub-head'> HOC01 </h1>
                        <img className='hoc-img' src={hoc01Img} alt={hoc01Img} />
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
                                        {subjectName1}, {subjectName2}, & {subjectName3}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <ClassHOC02 />
                </div>
            </>

        );
    }
}

export default ClassHocMain(ClassHOC01);