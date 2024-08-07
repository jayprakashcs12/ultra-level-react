import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PiPencilThin } from 'react-icons/pi';
import ReactTooltip from 'react-tooltip';
import { CiUndo } from 'react-icons/ci';
import { toast } from 'react-toastify';

class ClassLogin extends Component {

    constructor(props) {
        super(props);
        this.state = { loginData: { fname: "", email: "", password: "" }};
    }

    componentDidMount() {
        document.title = "Class Login Form";
        let storedUserData = JSON.parse(localStorage.getItem("userData"));
        if (storedUserData) {
            this.setState({ loginData: storedUserData });
        }
    }

    loginsData = (e) => {
        let { name, value } = e.target;
        this.setState(prevState => ({
            loginData: { ...prevState.loginData, [name]: value }
        }));
    };

    handleLogin = (e) => {
        e.preventDefault();
        let { fname, email, password } = this.state.loginData;
        if (!email || !password) {
            toast.error("All fields are required...!", { autoClose: 750 });
        } else {
            let payload = { fname, email, password };
            console.log(payload, "Function Login Form");
            localStorage.setItem("Full Name", fname);
            localStorage.setItem("eMail ID", email);
            localStorage.setItem("Password", password);
            this.props.navigate("/home");
            toast.info(`${fname} successfully logged in with ${email} and ${password}...!`, { autoClose: 750 });
        }
    };

    handleClear = () => {
        this.setState({ loginData: { fname: "", email: "", password: "" } });
    };

    handleRegister = () => {
        this.props.navigate("/class-signup-form");
        toast.warn(`Please create an account to login...!`, { autoClose: 750 });
    };

    handleForget = () => {
        this.props.navigate("/class-reset-form");
        toast.warn(`Create a new password to login again...!`, { autoClose: 750 });
    };

    render() {
        
        let { fname, email, password } = this.state.loginData;

        return (
            <>
                <h1 className='pro-head'> Class Login Form </h1>
                <div className='pro-div login-up-div'>
                    <form className='pro-login-state'>
                        <label className='pro-label' htmlFor="email">eMail ID</label>
                        <input className='product-input' type="email" name='email' value={email} placeholder='Enter Your eMail ID' 
                            onChange={this.loginsData}
                        />

                        <label className='pro-label' htmlFor="password">Password</label>
                        <input className='product-input' type="text" name='password' value={password} placeholder='Enter Your Password' 
                            onChange={this.loginsData}
                        />

                        <div className="btn-div">
                            <CiUndo size={35} className="pro-btn reset-btn" data-tip data-for="clearLogin" onClick={this.handleClear} />
                            <ReactTooltip id="clearLogin" place="bottom" effect="solid"> Clear the login fields </ReactTooltip>
                            <PiPencilThin size={35} className="pro-btn inc-btn" data-tip data-for="doLogin" onClick={this.handleLogin} />
                            <ReactTooltip id="doLogin" place="bottom" effect="solid"> Login to app </ReactTooltip>
                        </div>

                        <div className="link-div alr-log-div">
                            <Link onClick={this.handleForget} className='log-link'> Forget Password? </Link>
                            <Link onClick={this.handleRegister} className='log-link'> Not Registered? </Link>
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

export default withNavigate(ClassLogin);