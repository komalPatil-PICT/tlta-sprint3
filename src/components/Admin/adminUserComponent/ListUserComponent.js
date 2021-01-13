import React, { Component } from 'react';
import UserService from '../../../services/AdminUserService';

class ListUserComponent extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            users: []
        }
        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.viewUser = this.viewUser.bind(this);
    }

    componentDidMount(){
        UserService.getUsers()
        .then((res) => {
            this.setState({users: res.data});
        });
    }

    addUser(){
        this.props.history.push('/add-user');
    }

    editUser(id){
        this.props.history.push(`/update-user/${id}`)
    }

    deleteUser(id){
        UserService.deleteUser(id).then((res) => {
            this.setState({users: this.state.users.filter( user => user.id !== id)});
        });
    }

    viewUser(id){
        
        this.props.history.push(`/view-user/${id}`);
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Users List</h2>
                <div className="form-group"> 
                    <button className="btn btn-success btn-lg float-right" onClick={this.addUser}>Add User</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>                                
                                <th>User Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email Id</th>
                                <th>Password</th>
                                <th>Role</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                
                                this.state.users.map(
                                    user => 
                                    <tr key= {user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.emailId}</td>
                                        <td>{user.password}</td>
                                        <td>{user.role}</td>
                                        <td>
                                            <button onClick = {()=>this.editUser(user.id)} className = "btn btn-info">Edit</button>
                                        </td>
                                        <td>
                                            <button  style = {{marginLeft: "10px"}} onClick = {()=>this.deleteUser(user.id)} className = "btn btn-danger">Delete</button>
                                        </td>

                                        <td>
                                            <button  style = {{marginLeft: "10px"}} onClick = {()=>this.viewUser(user.id)} className = "btn btn-info">View</button>
                                        </td>
                                     </tr>  
                                )
                            }


                        </tbody>

                    </table>

                </div>
            </div>
        );
    }
}

export default ListUserComponent;