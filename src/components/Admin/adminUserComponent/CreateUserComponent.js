import React, { Component } from 'react';
import UserService from '../../../services/AdminUserService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faLock } from '@fortawesome/free-solid-svg-icons';
const initialState = {
    id: '',
    firstName: '',
    lastName: '',
    emailId: '',
    password: '',
    role: 'USER',
    firstNameError: '',
    lastNameError: '',
    emailIdError: '',
    passwordError: ''
}
class CreateUserComponent extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }
    validate = () => {
        let firstNameError= '';
        let lastNameError= '';
        let emailIdError= '';
        let passwordError= '';
        const validEmailRegex = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
        const strongRegex = new RegExp(/^[A-Za-z_0-9@#$%]{6,12}/);
        
        if(!strongRegex.test(this.state.password)){
            passwordError='length must be atleast 8 with at least 1 lowercase, uppercase, number, special symbol';
        }
        if(!this.state.firstName){
            firstNameError='first name cannot be blank';
        }
        if(!validEmailRegex.test(this.state.emailId)){
            emailIdError = "Invalid Email Id";
        }
        if(!this.state.lastName){
            lastNameError='last name cannot be blank';
        }
        if(emailIdError || firstNameError || lastNameError || passwordError){
            this.setState({emailIdError , firstNameError , lastNameError, passwordError});
            return false;
        }
        return true;
    }
    saveUser = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {

            let user = {
                id: null, firstName: this.state.firstName, lastName: this.state.lastName,
                emailId: this.state.emailId, password: this.state.password, role: this.state.role
            };
            console.log(JSON.stringify(user));
            UserService.createUser(user).then(res => {
                this.props.history.push('/adminManageUsers');
            })

            this.setState(initialState);
        }
    }

    cancel() {
        this.props.history.push('/adminManageUsers');
    }

    changeHandler = (event) => {
        const isCheckedbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckedbox
                ? event.target.isChecked
                : event.target.value
        });
    };


    render() {
        return (
            <div>


                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3 ">
                            <h3 className="text-center mt-4">Add User</h3>
                            <div className="card-body ">
                                <form>
                                    <div className="form-group">
                                        <label>Enter First Name <FontAwesomeIcon icon={faUser} /></label>
                                        <input placeholder="First Name" name="firstName"
                                            className="form-control" value={this.state.firstName}
                                            onChange={this.changeHandler} />
                                    </div>
                                    <div style={{ color: 'red' }}>{this.state.firstNameError}</div>
                                    <div className="form-group">
                                        <label>Enter Last Name <FontAwesomeIcon icon={faUser} /></label>
                                        <input placeholder="Last Name" name="lastName"
                                            className="form-control" value={this.state.lastName}
                                            onChange={this.changeHandler} />
                                    </div>
                                    <div style={{ color: 'red' }}>{this.state.lastNameError}</div>
                                    <div className="form-group">
                                        <label>Enter Email Id <FontAwesomeIcon icon={faEnvelope} /> </label>
                                        <input placeholder="Email ID" name="emailId"
                                            className="form-control" value={this.state.emailId}
                                            onChange={this.changeHandler} />
                                    </div>
                                    <div style={{ color: 'red' }}>{this.state.emailIdError}</div>

                                    <div className="form-group">

                                        <label>Enter Password <FontAwesomeIcon icon={faLock} /></label>
                                        <input type="password" placeholder="Password" name="password"
                                            className="form-control" value={this.state.password}
                                            onChange={this.changeHandler} />

                                    </div>
                                    <div style={{ color: 'red' }}>{this.state.passwordError}</div>

                                    <div className="form-group">
                                        <label>Enter Role(USER,MODERATOR)</label>
                                        <select value={this.state.role} onChange={this.changeHandler} name="role">
                                            <option value="USER">USER</option>
                                            <option value="MODERATOR">MODERATOR</option>
                                        </select>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveUser}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default CreateUserComponent;