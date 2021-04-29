import React, { Component } from 'react';
import axios from 'axios';

class ForgetPassword extends Component {
    userData;
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            lastName: '',
            password: '',
            newPassword: '',
            rePassword:'',
            errors: {}
        }

        this.emailHandler=this.emailHandler.bind(this);
        this.lastNameHandler=this.lastNameHandler.bind(this);
        this.changeNewPasswordHandler=this.changeNewPasswordHandler.bind(this);
        this.changeRePasswordHandler=this.changeRePasswordHandler.bind(this);
        this.ForgetPassword=this.ForgetPassword.bind(this);
    }

    emailHandler = (event) => {
        this.setState({ email: event.target.value });
    }

    lastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }

    changeNewPasswordHandler = (event) => {
        this.setState({ newPassword: event.target.value });
    }

    changeRePasswordHandler = (event) => {
        this.setState({ rePassword: event.target.value });
    }

    validateForm() {

        let errors = {};

        let formIsValid = true;

        if (!this.state.email) {

            formIsValid = false;

            errors["email"] = "*Please enter your email-ID.";

        }

        if (typeof this.state.email !== "undefined") {

            var pattern = new RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);

            if (!pattern.test(this.state.email)) {

                formIsValid = false;

                errors["email"] = "*Please enter valid email-ID.";

            }

        }

        if (!this.state.lastName) {

            formIsValid = false;

            errors["lastName"] = "*Please enter your lastName.";

        }
        
        if (!this.state.newPassword) {

            formIsValid = false;

            errors["newPassword"] = "*Please enter new password.";

        }

       else if (typeof this.state.newPassword !== "undefined") {

            if (!this.state.newPassword.match(/^[A-Za-z_0-9@#$%]{6,12}/)) {

                formIsValid = false;

                errors["newPassword"] = "*Please enter secure and strong password.";

            }

        }
        if (!this.state.rePassword) {

            formIsValid = false;

            errors["rePassword"] = "*Please enter new password.";

        }

      else  if (typeof this.state.rePassword !== "undefined") {

            if (!this.state.rePassword.match(/^[A-Za-z_0-9@#$%]{6,12}/)) {

                formIsValid = false;

                errors["newPassword"] = "*Please enter secure and strong password.";

            }

        }

        if(this.state.newPassword !== this.state.rePassword)
        {
            formIsValid = false;
            errors["notEqual"]="*Password do not match."
        }

        this.setState({

            errors: errors

        });

        return formIsValid;
    }

    componentDidMount(){
        this.userData = JSON.parse(localStorage.getItem('registerUser'));
        if (localStorage.getItem('registerUser')) {
            this.setState({
                email: this.userData.email,
            //    lastName: this.userData.lastName
            
            })
        } else {
            this.setState({
                email: '',
            //    lastName:''
              
            })

        }
    }

    ForgetPassword(e) {
        e.preventDefault();

        if (this.validateForm()) {
            var apiBaseUrl = "http://localhost:8080/springfox/api/Login/forgot/"+this.state.newPassword;

            var data = {

                "email": this.state.email,

                // "password": this.state.password
                "lastName": this.state.lastName

            }

            var headers = {

                'Content-Type': 'application/json',

            }

            axios.post(apiBaseUrl, data, { headers: headers }).then(function (response) {
                alert("Password changed successfully");
                localStorage.removeItem('registerUser');
                window.location = "/";
                
            }).catch(function (error) {

               
                alert("Password is incorrect.")
            });
        }
    }

    cancel() {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
               <div className="container card-view">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Forget Password</h3>
                            <div className="card-body">
                                <fieldset>
                                    <form>
                                    <div className="form-group">
                                            <label>Enter email</label>
                                            <input placeholder="email" type="email"
                                                name="email"
                                                className="form-control"
                                                value={this.state.email}
                                                onChange={this.emailHandler} required/>
                                    </div>
                                    <div className="errorMsg">{this.state.errors.email}</div>

                                    <div className="form-group">
                                            <label>Enter lastName</label>
                                            <input placeholder="lastName" type="text"
                                                name="lastName"
                                                className="form-control"
                                                value={this.state.lastName }
                                                onChange={this.lastNameHandler} required/>
                                    </div>
                                   <div className="errorMsg">{this.state.errors.lastName}</div>

                                   <div className="form-group">
                                            <label>Enter new password</label>
                                            <input placeholder="New password" type="password"
                                                name="password"
                                                className="form-control"
                                                value={this.state.newPassword }
                                                onChange={this.changeNewPasswordHandler} required/>
                                    </div>
                                    <div className="errorMsg">{this.state.errors.newPassword}</div>

                                    <div className="form-group">
                                            <label>Re-enter the password</label>
                                            <input placeholder="New password" type="password"
                                                name="password"
                                                className="form-control"
                                                value={this.state.rePassword}
                                                onChange={this.changeRePasswordHandler} required/>
                                    </div>
                                    <div className="errorMsg">{this.state.errors.rePassword}</div>
                                    <div className="errorMsg">{this.state.errors.notEqual}</div>

                                    <button className="btn btn-success" onClick={this.ForgetPassword}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                    </form>
                              </fieldset>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }


}

export default ForgetPassword;