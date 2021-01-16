import React, { Component } from 'react';
import AdminUsersActivityService from '../../services/AdminUsersActivityService';

class ViewLearningActivityComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            userActivities: {},
            isLoaded:false
        }
    }

    componentDidMount(){
        AdminUsersActivityService.getUserActivityById(this.state.id)
        .then( res => {
           this.setState({userActivities:res.data, isLoaded:true});
        }); 
        
    }

    render() {
        return (
            <div>     
                <h3 className = "text-center">View Employee Details</h3>
                {this.state.isLoaded?

                <div className= "row">
                    <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>                                
                                        <th>User Id</th>
                                        <th>Activity Name</th>
                                        <th>Activity Link</th>
                                        <th>Activity Level</th>
                                        <th>Activity Time</th>
                                        <th>Activity Release Date</th>
                                        <th>Assesment Name</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{this.state.userActivities.userActivityId}</td>
                                        <td>{this.state.userActivities.learningActivity.activityName}</td>
                                        <td>{this.state.userActivities.learningActivity.activityLink}</td>
                                        <td>{this.state.userActivities.learningActivity.activityLevel}</td>
                                        <td>{this.state.userActivities.learningActivity.activityTime}</td>
                                        <td>{this.state.userActivities.learningActivity.activityReleaseDate}</td>
                                        <td>{this.state.userActivities.assesment.assessmentName}</td>
                        
                                        <td>
                                            <button  style = {{marginLeft: "10px"}} onClick = {()=>this.addActivity()} className = "btn btn-info">Register</button>
                                        </td>
                                    </tr>  
                                </tbody>

                    </table>
               </div>
                :null } 
            </div>
        );
    }
}



export default ViewLearningActivityComponent;