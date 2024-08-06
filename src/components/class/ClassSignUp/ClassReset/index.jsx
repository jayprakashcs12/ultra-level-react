import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PiPencilThin } from 'react-icons/pi';
import ReactTooltip from 'react-tooltip';
import { CiUndo } from 'react-icons/ci';
import { toast } from 'react-toastify';

class ClassReset extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resetData: { fname: "", email: "", newpassword: "", c_newpassword: "" }, navigate: false,
        };
    }

    componentDidMount() {
        document.title = "Class Reset Form";
        let storedUserData = JSON.parse(localStorage.getItem("userData"));
        console.log(storedUserData, "Class Reset Form");
        if (storedUserData) {
            this.setState({ resetData: storedUserData });
        }
    }

    resetsData = (e) => {
        let { name, value } = e.target;
        this.setState({ resetData: { ...this.state.resetData, [name]: value } });
    };

    handleSubmit = (e) => {

        e.preventDefault();
        let { newpassword, c_newpassword, fname, email } = this.state.resetData;

        if (!newpassword || !c_newpassword) {
            toast.warn(`Password and Confirm Password fields cannot be empty...!`, { autoClose: 750 });
            return;
        }

        if (newpassword === c_newpassword) {
            localStorage.setItem("Full Name", fname);
            localStorage.setItem("Email ID", email);
            localStorage.setItem("Password", newpassword);
            toast.success(`${fname} successfully updated password ${newpassword} for email id ${email}...!`, { autoClose: 750 });
            this.setState({ navigate: true });
        } else {
            toast.warn(`Password ${newpassword} & Confirm Password ${c_newpassword} are not matching...!`, { autoClose: 750 });
        }
    };

    handleRemember = () => {
        this.props.navigate("/class-login-form");
        toast.info(`Login with registered eMail id with password...!`, { autoClose: 750 });
    };

    handleClear = () => {
        this.setState({ resetData: { newpassword: "", c_newpassword: "" } });
        toast.warn("Form Cleared Successfully...!", { autoClose: 750 });
    };

    render() {

        let { resetData } = this.state, { newpassword, c_newpassword } = resetData;

        return (
            <>
                <h1 className='pro-head'> Class Reset Form </h1>
                <div className='pro-div login-up-div'>
                    <form className='pro-login-state'>
                        <label className='pro-label' htmlFor="password">Password</label>
                        <input className='product-input' type="text" name='newpassword' placeholder='Enter Your New Password'
                            value={newpassword} onChange={this.resetsData}
                        />

                        <label className='pro-label' htmlFor="c_newpassword">Confirm Password</label>
                        <input className='product-input' type="text" name='c_newpassword' placeholder='Re-Enter Your New Password'
                            value={c_newpassword} onChange={this.resetsData}
                        />

                        <div className="btn-div">
                            <CiUndo size={35} className="pro-btn reset-btn" data-tip data-for="clearReset" onClick={this.handleClear} />
                            <ReactTooltip id="clearReset" place="bottom" effect="solid"> Clear the password fields </ReactTooltip>
                            <PiPencilThin size={35} className="pro-btn inc-btn" data-tip data-for="doReset" onClick={this.handleSubmit} />
                            <ReactTooltip id="doReset" place="bottom" effect="solid"> Reset the password </ReactTooltip>
                        </div>

                        <div className="link-div remember-pass-div">
                            <Link onClick={this.handleRemember} className='log-link'> Remembered Password? </Link>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

function withNavigate(Component) {
    return function(props) {
        let navigate = useNavigate();
        return <Component {...props} navigate={navigate} />;
    }
}

export default withNavigate(ClassReset);