import React, { Component } from 'react';
import ActivityService from '../../../services/AdminLearningActivityService';

class ViewActivityComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            activity: {}
        }
    }

    componentDidMount(){
        ActivityService.getActivityById(this.state.id).then( res => {
            this.setState({activity: res.data});
        })
    }

    render() {
        return (
            <div>
               <div className= "card col-md-6 offset-md-3">
                    <h3 className = "text-center">View Activity Details</h3>
                    <div className= "card-body">
                        <div className = "row">
                            <label>Activity Name: </label>
                            <div>{this.state.activity.activityName}</div>
                        </div>
                        <div className = "row">
                            <label>Activity Link: </label>
                            <div>{this.state.activity.activityLink}</div>
                        </div>
                        <div className = "row">
                            <label>Activity Level: </label>
                            <div>{this.state.activity.activityLevel}</div>
                        </div>
                        
                        <div className = "row">
                            <label>Activity Time: </label>
                            <div>{this.state.activity.activityTime}</div>
                        </div>
                        
                        <div className = "row">
                            <label>Activity Release Date: </label>
                            <div>{this.state.activity.activityReleaseDate}</div>
                        </div>
                        <div className = "row">
                            <label>Assessment ID: </label>
                            <div>{this.state.activity.assessmentId}</div>
                        </div>

                    </div>
               </div>
            </div>
        );
    }
}



export default ViewActivityComponent;