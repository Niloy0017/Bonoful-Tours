import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../redux/reduxslices/authslice";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            submitted: false,
            redirectToLogin: false 
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    formOnSubmit = (event) => {
        event.preventDefault();
        const { firstname, lastname, email, password } = this.state;

        if (email && password && firstname && lastname) {
            const newUser = {
                firstName: firstname,
                lastName: lastname,
                password: password,
                email: email,
            };

            this.props.register(newUser);

            console.log("register form values are:");
            console.log("firstname: ", firstname, "lastname: ", lastname, "email : ", email, "password : ", password);

            this.setState({
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                submitted: true,
                redirectToLogin: true 
            });
        }
    }

    render() {
        const { firstname, lastname, email, password, submitted, redirectToLogin } = this.state;

        if (redirectToLogin) {
            return <Navigate to="/login" />;;
        }

        return (
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center vw-100">
                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                    <img
                        src="https://cdni.iconscout.com/illustration/premium/thumb/user-registration-4489364-3723271.png"
                        className="w-100"
                        alt="Registration"
                    />
                </div>

                <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
                    <div className="h1">Sign Up</div>

                    <form className="d-flex flex-column justify-content-center align-items-center p-3 mt-3 gap-3">
                        <div className="d-flex flex-column">
                            <label htmlFor="firstnam" className="fontstyle">First Name</label>
                            <input name="firstname" id="firstnam" placeholder="enter your first name"
                                value={firstname} onChange={this.handleInputChange} />
                        </div>

                        <div className="d-flex flex-column">
                            <label htmlFor="secondnam" className="fontstyle">Last Name</label>
                            <input name="lastname" id="secondnam" placeholder="enter your last name"
                                value={lastname} onChange={this.handleInputChange} />
                        </div>

                        <div className="d-flex flex-column">
                            <label htmlFor="mail" className="fontstyle">Email</label>
                            <input name="email" id="mail" type="email" placeholder="enter your email"
                                value={email} onChange={this.handleInputChange} />
                        </div>

                        <div className="d-flex flex-column">
                            <label htmlFor="password" className="fontstyle">Password</label>
                            <input name="password" id="password" type="password" placeholder="enter your password"
                                value={password} onChange={this.handleInputChange} />
                        </div>

                        <button id="btn" style={{ backgroundColor: 'coral' }} onClick={this.formOnSubmit}>SUBMIT</button>

                        {submitted && (
                            <div>
                                <p>Registration successful! Proceed to login:</p>
                                <Link to="/login">GO TO LOGIN</Link>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.auth.user,
});

const mapDispatchToProps = { register };

export default connect(mapStateToProps, mapDispatchToProps)(Register);



