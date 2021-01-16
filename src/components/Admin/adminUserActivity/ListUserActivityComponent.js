import React, { Component } from 'react';
import ActivityService from '../../../services/AdminUserActivityService';

class ListUserActivityComponent extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            activities: []
        }
       
        this.editActivity = this.editActivity.bind(this);
        this.deleteActivity = this.deleteActivity.bind(this);
        this.viewActivity = this.viewActivity.bind(this);
    }

    componentDidMount(){
        ActivityService.getUserActivity()
        .then((res) => {
            this.setState({activities: res.data});
        });
    }

    editActivity(id){
        this.props.history.push(`/update-user-activity/${id}`)
    }

    deleteActivity(id){
        ActivityService.deleteUserActivity(id).then((res) => {
            this.setState({activities: this.state.activities.filter( activity => activity.id !== id)});
        });
    }

    viewActivity(userActivityId){
        this.props.history.push(`/view-user-activity/${userActivityId}`);
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Activities List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>                                
                                <th>User Activity Id</th>
                                <th>User Name</th>
                                <th>Activity Name</th>
                                <th>Status</th>
                                <th>Certificate</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                
                                this.state.activities.map(
                                    activity => 
                                    <tr key= {activity.userActivityId}>
                                        <td>{activity.userActivityId}</td>
                                        <td>{activity.registerUser.firstName}</td>
                                        <td>{activity.learningActivity.activityName}</td>
                                        <td>{activity.status}</td>
                                        <td>{activity.certificate}</td>
                                        <td>
                                            <button onClick = {()=>this.editActivity(activity.userActivityId)} className = "btn btn-info">Edit</button>
                                        </td>
                                        <td>
                                            <button  style = {{marginLeft: "10px"}} onClick = {()=>this.deleteActivity(activity.userActivityId)} className = "btn btn-danger">Delete</button>
                                        </td>

                                        <td>
                                            <button  style = {{marginLeft: "10px"}} onClick = {()=>this.viewActivity(activity.userActivityId)} className = "btn btn-info">View</button>
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

export default ListUserActivityComponent;