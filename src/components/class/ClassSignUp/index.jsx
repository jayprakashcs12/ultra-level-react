import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PiPencilThin } from 'react-icons/pi';
import ReactTooltip from 'react-tooltip';
import { CiUndo } from 'react-icons/ci';
import { toast } from 'react-toastify';

class ClassSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { fname: "", lname: "", mobile: "", email: "", password: "", r_password: "" };
    }

    componentDidMount() {
        document.title = "Class Sign-Up Forms";
        localStorage.removeItem("userData");
    }

    signUpData = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleKeyPress = (e) => {
        if (/[0-9\b\t\r]/.test(e.key) || e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "Delete" || e.key === "Backspace") {
        } else {
            e.preventDefault();
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { fname, lname, email, password } = this.state;
        if (!fname || !email || !password) {
            toast.error("All fields are required...!", { autoClose: 750 });
        } else {
            const payload = { fname, lname, email, password };
            console.log(payload, "Class SignUp Form");
            localStorage.setItem("userData", JSON.stringify(payload));
            this.props.history.push("/class-login-form");
            toast.success(`${fname} successfully created account with eMail ID - ${email} and Password - ${password}...!`, { autoClose: 750 });
        }
    };

    handleLogin = () => {
        this.props.history.push("/class-login-form");
        toast.info(`Login with registered eMail id with password...!`, { autoClose: 750 });
    };

    handleClear = () => {
        this.setState({ fname: "", lname: "", mobile: "", email: "", password: "", r_password: "" });
        toast.warn("Form Cleared Successfully...!", { autoClose: 750 });
    };

    render() {
        const { fname, lname, mobile, email, password, r_password } = this.state;

        return (
            <>
                <h1 className='pro-head'> Class Sign Up Form </h1>
                <div className='pro-div sign-up-div'>
                    <form className='pro-state'>
                        <div className="pro-row-data">
                            <div className="form-group">
                                <label className='pro-label' htmlFor="fname"> First Name </label>
                                <input className='product-input' type="text" name='fname' value={fname} placeholder='Enter Your First Name'
                                    onChange={this.signUpData}
                                />
                            </div>

                            <div className="form-group">
                                <label className='pro-label' htmlFor="lname"> Last Name </label>
                                <input className='product-input' type="text" name='lname' value={lname} placeholder='Enter Your Last Name'
                                    onChange={this.signUpData}
                                />
                            </div>
                        </div>

                        <div className="pro-row-data">
                            <div className="form-group">
                                <label className='pro-label' htmlFor="mobile"> Mobile Number </label>
                                <input className='product-input' type="tel" name='mobile' value={mobile} placeholder='Enter Your Mobile Number'
                                    onChange={this.signUpData} maxLength={10} onKeyDown={this.handleKeyPress} 
                                />
                            </div>

                            <div className="form-group">
                                <label className='pro-label' htmlFor="email"> eMail ID </label>
                                <input className='product-input' type="email" name='email' value={email} placeholder='Enter Your eMail ID'
                                    onChange={this.signUpData}
                                />
                            </div>
                        </div>

                        <div className="pro-row-data">
                            <div className="form-group">
                                <label className='pro-label' htmlFor="password"> Password </label>
                                <input className='product-input' type="text" name='password' value={password} placeholder='Enter Your Password'
                                    onChange={this.signUpData}
                                />
                            </div>

                            <div className="form-group">
                                <label className='pro-label' htmlFor="r_password"> Repeat Password </label>
                                <input className='product-input' type="text" name='r_password' value={r_password} placeholder='Enter Your Repeat Password'
                                    onChange={this.signUpData}
                                />
                            </div>
                        </div>

                        <div className="btn-div">
                            <CiUndo size={35} className="pro-btn reset-btn" data-tip data-for="clearSignup" onClick={this.handleClear} />
                            <ReactTooltip id="clearSignup" place="bottom" effect="solid"> Clear the sign up form </ReactTooltip>
                            <PiPencilThin size={35} className="pro-btn inc-btn" data-tip data-for="doSignup" onClick={this.handleSubmit} />
                            <ReactTooltip id="doSignup" place="bottom" effect="solid"> Signup the app </ReactTooltip>
                        </div>

                        <div className="link-div alr-reg-div">
                            <Link onClick={this.handleLogin} className='log-link'> Already Registered? </Link>
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

export default withNavigate(ClassSignUp);