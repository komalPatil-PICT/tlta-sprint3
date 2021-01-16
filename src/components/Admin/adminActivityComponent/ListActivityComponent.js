import React, { Component } from 'react';
import ActivityService from '../../../services/AdminLearningActivityService';

class ListActivityComponent extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            activities: []
        }
        this.addActivity = this.addActivity.bind(this);
        this.editActivity = this.editActivity.bind(this);
        this.deleteActivity = this.deleteActivity.bind(this);
        this.viewActivity = this.viewActivity.bind(this);
    }

    componentDidMount(){
        ActivityService.getActivities()
        .then((res) => {
            this.setState({activities: res.data});
        });
    }

    addActivity(){
        this.props.history.push('/add-activity');
    }

    editActivity(id){
        this.props.history.push(`/update-activity/${id}`)
    }

    deleteActivity(id){
        ActivityService.deleteActivity(id).then((res) => {
            this.setState({activities: this.state.activities.filter( activity => activity.id !== id)});
        });
    }

    viewActivity(id){
        this.props.history.push(`/view-activity/${id}`);
    }

    render() {
        return (
            <div>
                <h2 className="text-center mt-4">Activities List</h2>
                <div className="form-group"> 
                    <button class="btn btn-success btn-lg float-right" onClick={this.addActivity}>Add Activity</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>                                
                                <th>Activity Id</th>
                                <th>Activity Name</th>
                                <th>Activity Link</th>
                                <th>Activity Level</th>
                                <th>Activity Time</th>
                                <th>Activity Release Date</th>
                                <th>Assesment ID</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                
                                this.state.activities.map(
                                    activity => 
                                    <tr key= {activity.id}>
                                        <td>{activity.id}</td>
                                        <td>{activity.activityName}</td>
                                        <td>{activity.activityLink}</td>
                                        <td>{activity.activityLevel}</td>
                                        <td>{activity.activityTime}</td>
                                        <td>{activity.activityReleaseDate}</td>
                                        <td>{activity.assesment.assessmentName}</td>
                                        <td>
                                            <button onClick = {()=>this.editActivity(activity.id)} className = "btn btn-info">Edit</button>
                                        </td>
                                        <td>
                                            <button  style = {{marginLeft: "10px"}} onClick = {()=>this.deleteActivity(activity.id)} className = "btn btn-danger">Delete</button>
                                        </td>

                                        <td>
                                            <button  style = {{marginLeft: "10px"}} onClick = {()=>this.viewActivity(activity.id)} className = "btn btn-info">View</button>
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

export default ListActivityComponent;