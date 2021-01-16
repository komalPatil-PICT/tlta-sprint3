import React, { Component } from 'react';
import UserService from '../../../services/AdminUserService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faUser,faLock} from '@fortawesome/free-solid-svg-icons';
class CreateUserComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            firstName: '',
            lastName: '',
            emailId: '',
            password: '',
            role: 'USER'    
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeRoleHandler = this.changeRoleHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {
            id: null, firstName: this.state.firstName, lastName: this.state.lastName,
            emailId: this.state.emailId, password: this.state.password, role: this.state.role
        };
        console.log(JSON.stringify(user));
        UserService.createUser(user).then(res => {
            this.props.history.push('/users');
        })
    }

    cancel() {
        this.props.history.push('/users');
    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }

    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }

    changeEmailIdHandler = (event) => {
        this.setState({ emailId: event.target.value });
    }

    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }
    changeRoleHandler = (event) => {
        this.setState({ role: event.target.value });
    }



    render() {
        return (
            <div>
           
            
                <div  className="container">
                    <div  className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3 ">
                            <h3 className="text-center mt-4">Add User</h3>
                            <div  className="card-body ">
                                <form>
                                    <div className="form-group">
                                        <label>Enter First Name <FontAwesomeIcon icon={faUser} /></label>
                                        <input placeholder="First Name" name="firstName"
                                            className="form-control" value={this.state.firstName}
                                            onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Enter Last Name <FontAwesomeIcon icon={faUser} /></label>
                                        <input placeholder="Last Name" name="lastName"
                                            className="form-control" value={this.state.lastName}
                                            onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Enter Email Id <FontAwesomeIcon icon={faEnvelope} /> </label>
                                        <input placeholder="Email ID" name="emailId"
                                            className="form-control" value={this.state.emailId}
                                            onChange={this.changeEmailIdHandler} />
                                    </div>

                                    <div className="form-group">
                                
                                        <label>Enter Password <FontAwesomeIcon icon={faLock} /></label>
                                        <input placeholder="Password" name="password"
                                            className="form-control" value={this.state.password}
                                            onChange={this.changePasswordHandler} />
                                           
                                    </div>

                                    <div className="form-group">
                                        <label>Enter Role(USER,MODERATOR)</label>
                                            <select value={this.state.role} onChange={this.changeRoleHandler} name="role">
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