import React, { Component } from 'react';
import AdminUsersActivityService from '../../services/AdminUsersActivityService';
import UserHeader from '../UserHeader';

class ViewLearningActivityComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            userActivities: []
        }
        this.uploadCertificate = this.uploadCertificate.bind(this);
    }

    componentDidMount(){
        let id = 8;
        AdminUsersActivityService.getUserActivityByUserId(id)
        .then((res) => {
            this.setState({userActivities: res.data});
      });
    }

    uploadCertificate(id){
        console.log(id);
        this.props.history.push(`/update-certificate/${id}`)
    }


    render() {
        return (
            <div>
                <UserHeader/>
                <div className="container card-view">
                <h2 className="text-center">My Learning</h2>
                
                <div className="row">
                    <table className="table table-striped table-bordered table-color">
                        <thead>
                            <tr>                                
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
                                        <td>{userActivity.registerUser.firstName}</td>
                                        <td>{userActivity.learningActivity.activityName}</td>
                                        <td>{userActivity.status}</td>
                                        <td>{userActivity.certificate}</td>
                                        <td>{userActivity.file}</td>
                                        <td>
                                            <button onClick = {()=>this.uploadCertificate(userActivity.userActivityId)} className = "btn btn-info">Upload Certificate</button>
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

export default ViewLearningActivityComponent;