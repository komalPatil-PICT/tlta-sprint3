import React, { Component } from 'react';
import UserService from '../../services/UserService';

class ListActivityComponent extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            activities: []
        }
        
        this.addActivity = this.addActivity.bind(this);
    }

    componentDidMount(){
        UserService.getActivities()
        .then((res) => {
            this.setState({activities: res.data});
        });
    }

    addActivity(){
        this.props.history.push(`/add-activity`);
    }

    render() {
        return (
            <div>
                <h2 className="text-center"> View Activity List</h2>
                
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
                                <th>Assesment Name</th>
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
                                            <button  style = {{marginLeft: "10px"}} onClick = {()=>this.addActivity()} className = "btn btn-info">Register</button>
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