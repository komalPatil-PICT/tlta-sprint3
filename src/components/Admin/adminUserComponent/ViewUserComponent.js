import React, { Component } from 'react';
import UserService from '../../../services/AdminUserService';


class ViewUserComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            user: {}
        }

    }

    componentDidMount(){
        UserService.getUserById(this.state.id).then( res => {
            this.setState({user: res.data});
        })
    }

    render() {
        return (
            <div>
               <div className= "card col-md-6 offset-md-3">
                    <h3 className = "text-center mt-4">View User Details</h3>
                    <div className= "card-body">
                        <div className = "row">
                            <label>First Name: </label>
                            <div>{this.state.user.firstName}</div>
                        </div>
                        <div className = "row">
                            <label>Last Name: </label>
                            <div>{this.state.user.lastName}</div>
                        </div>
                        <div className = "row">
                            <label>Email Id: </label>
                            <div>{this.state.user.emailId}</div>
                        </div>
                        <div className = "row">
                            <label>Password: </label>
                            <div>{this.state.user.password}</div>
                        </div>
                        <div className = "row">
                            <label>Role: </label>
                            <div>{this.state.user.role}</div>
                        </div>

                    </div>
               </div>
            </div>
        );
    }
}



export default ViewUserComponent;