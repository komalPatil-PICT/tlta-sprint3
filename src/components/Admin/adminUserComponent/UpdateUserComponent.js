import React, { Component } from 'react';
import UserService from '../../../services/AdminUserService';

class UpdateUserComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: '',
            password: '',
            role :'USER'
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeRoleHandler = this.changeRoleHandler.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    componentDidMount() {
        UserService.getUserById(this.state.id).then((res) => {
            let User = res.data;
            this.setState({
                id: User.id,
                firstName: User.firstName,
                lastName: User.lastName,
                emailId: User.emailId,
                password: User.password,
                role: User.role
            });
        });
    }

    updateUser = (e) => {
        e.preventDefault();
        let User = {
            id: this.state.id, firstName: this.state.firstName, lastName: this.state.lastName,
            emailId: this.state.emailId,password: this.state.password, role: this.state.role
        };
        console.log(JSON.stringify(User));
        UserService.updateUser(User, this.state.id).then((res) => {
            this.props.history.push('/users');
        });
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
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Edit User</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Enter First Name</label>
                                        <input placeholder="User First Name" name="firstName"
                                            className="form-control" value={this.state.firstName}
                                            onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Enter User Last Name</label>
                                        <input placeholder="Last Name" name="lastName"
                                            className="form-control" value={this.state.lastName}
                                            onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Enter User Email Id</label>
                                        <input placeholder="Email Id" name="emailId"
                                            className="form-control" value={this.state.emailId}
                                            onChange={this.changeEmailIdHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label>Enter User Password</label>
                                        <input placeholder="Time Duration" name="password"
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

                                    <button className = "btn btn-success" onClick = {this.updateUser}>Update</button>
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

export default UpdateUserComponent;