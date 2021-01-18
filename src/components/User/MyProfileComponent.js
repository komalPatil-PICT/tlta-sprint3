import React, { Component } from 'react';
import UserService from '../../services/UserService';
import UserHeader from '../UserHeader';

class MyProfileComponent extends Component{
    constructor(props) {
        super(props);

        this.state = {
            id: 14,
            userActivities: {},
            //isLoaded:false
        }
    }

    componentDidMount(){
        UserService.getRegisterUserById(this.state.id)
        .then( res => {
           this.setState({userActivities:res.data});
        }); 
        
    }

    render() {
        return (
            <div>     
                <UserHeader/>
                <div className="container card-view">
                    <h3 className = "text-center m2-4">View User Details</h3>
                    {/* {this.state.isLoaded? */}

                    <div className= "row">
                        <table className="table table-striped table-bordered table-color">
                                    <thead>
                                        <tr>                                
                                            <th>User Id</th>
                                            <th>Name</th>
                                            <th>Last</th>
                                            <th>Email</th>
                                            <th>Password</th>
                                            <th>Role</th>
                                            

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{this.state.userActivities.id}</td>
                                            <td>{this.state.userActivities.firstName}</td>
                                            <td>{this.state.userActivities.lastName}</td>
                                            <td>{this.state.userActivities.emailId}</td>
                                            <td>{this.state.userActivities.password}</td>
                                            <td>{this.state.userActivities.role}</td>                            
                                        </tr>  
                                    </tbody>

                        </table>
                    </div>
                    {/* :null }  */}
                </div>
            </div>
        );
    }
}

export default MyProfileComponent;