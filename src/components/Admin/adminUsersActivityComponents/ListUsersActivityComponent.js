import React, { Component } from 'react';
import AdminUsersActivityService from '../../../services/AdminUsersActivityService';
import Header from '../../Header';

class ListUsersActivityComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            userActivities: []
        }
        this.editUsersActivity = this.editUsersActivity.bind(this);
        this.viewUsersActivity = this.viewUsersActivity.bind(this);
    }

    componentDidMount(){
        AdminUsersActivityService.getUserActivity()
        .then((res) => {
            this.setState({userActivities: res.data});
      });
    }

    editUsersActivity(id){
        console.log(id);
        this.props.history.push(`/update-userActivity/${id}`)
    }

    viewUsersActivity(id){
        this.props.history.push(`/view-userActivity/${id}`);
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="container">

                <h2 className="text-center mt-4">Users Activity List</h2>
                
                <div className="row">
                    <table className="table table-striped table-bordered table-color">
                        <thead>
                            <tr>                                
                                <th>User Id</th>
                                <th>User Name</th>
                                <th>Activity Name</th>
                                <th>Status</th>
                                <th>Certificate</th>
                                <th>File</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.userActivities.map(
                                    userActivity => 
                                    <tr key= {userActivity.userActivityId}>
                                        <td>{userActivity.userActivityId}</td>
                                        <td>{userActivity.registerUser.firstName}</td>
                                        <td>{userActivity.learningActivity.activityName}</td>
                                        <td>{userActivity.status}</td>
                                        <td>{userActivity.certificate}</td>
                                        <td>{userActivity.file}</td>
                                        <td>
                                            <button onClick = {()=>this.editUsersActivity(userActivity.userActivityId)} className = "btn btn-info">Edit</button>
                                        </td>          
                                        <td>
                                            <button  style = {{marginLeft: "10px"}} onClick = {()=>this.viewUsersActivity(userActivity.userActivityId)} className = "btn btn-info">View</button>
                                        </td>
                                     </tr>  
                                )
                            }

                        </tbody>

                    </table>

                </div>
                </div>
            </div>
        );
    }
}

export default ListUsersActivityComponent;