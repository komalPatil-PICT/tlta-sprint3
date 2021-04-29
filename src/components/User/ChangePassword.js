import React, { Component } from 'react';
import axios from 'axios';
import UserHeader from '../UserHeader';

class ChangePassword extends Component {
    userData;
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            newPassword: '',
            rePassword:'',
            errors: {}
        }

        this.changePasswordHandler=this.changePasswordHandler.bind(this);
        this.changeNewPasswordHandler=this.changeNewPasswordHandler.bind(this);
        this.changeRePasswordHandler=this.changeRePasswordHandler.bind(this);
        this.ChangePassword=this.ChangePassword.bind(this);
    }

    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
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

        if (!this.state.password) {

            formIsValid = false;

            errors["password"] = "*Please enter your password.";

        }

        else if (typeof this.state.password !== "undefined") {

            if (!this.state.password.match(/^[A-Za-z_0-9@#$%]{6,12}/)) {

                formIsValid = false;

                errors["password"] = "*Please enter valid password.";

            }

        }

        if (!this.state.newPassword) {

            formIsValid = false;

            errors["newPassword"] = "*Please enter the password.";

        }

        else if (typeof this.state.newPassword !== "undefined") {

            if (!this.state.newPassword.match(/^[A-Za-z_0-9@#$%]{6,12}/)) {

                formIsValid = false;

                errors["newPassword"] = "*Please enter valid password.";

            }

        }
        if (!this.state.rePassword) {

            formIsValid = false;

            errors["rePassword"] = "*Please enter the password.";

        }

        else if (typeof this.state.rePassword !== "undefined") {

            if (!this.state.rePassword.match(/^[A-Za-z_0-9@#$%]{6,12}/)) {

                formIsValid = false;

                errors["rePassword"] = "*Please enter valid password.";

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
            
            })
        } else {
            this.setState({
                email: '',
              
            })

        }
    }

    ChangePassword(e) {
        e.preventDefault();

        if (this.validateForm()) {
            var apiBaseUrl = "http://localhost:8080/springfox/api/Login/reset/"+this.state.newPassword;

            var data = {

                "email": this.state.email,

                "password": this.state.password

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
        this.props.history.push('/userDashboard');
    }

    render() {
        return (
            <div>
                <UserHeader/>
                <div className="container card-view">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">TLTA</h3>
                            <div className="card-body">
                                <fieldset>
                                    <form>
                                    <div className="form-group">
                                            <label>Enter old password</label>
                                            <input placeholder="Old password" type="password"
                                                name="password"
                                                className="form-control"
                                                value={this.state.password}
                                                onChange={this.changePasswordHandler} required/>
                                    </div>
                                    <div className="errorMsg">{this.state.errors.password}</div>

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
                                            <label>Reenter the password</label>
                                            <input placeholder="New password" type="password"
                                                name="password"
                                                className="form-control"
                                                value={this.state.rePassword}
                                                onChange={this.changeRePasswordHandler} required/>
                                    </div>
                                    <div className="errorMsg">{this.state.errors.rePassword}</div>
                                    <div className="errorMsg">{this.state.errors.notEqual}</div>

                                    <button className="btn btn-success" onClick={this.ChangePassword}>Save</button>
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

export default ChangePassword;