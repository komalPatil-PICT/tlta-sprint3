import React, { Component } from 'react';
import ActivityService from '../../../services/AdminUserActivityService';

class ViewUserActivityComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userActivityId: this.props.match.params.userActivityId,
            activities: {}
        }

    }

    componentDidMount(){
        ActivityService.getUserActivityById(this.state.userActivityId).then( res => {
            this.setState({activities: res.data});
        })
    }

    render() {
        return (
            <div>
               <div className= "card col-md-6 offset-md-3">
                    <h3 className = "text-center">View User Details</h3>
                    <div className= "card-body">
                        <div className = "row">
                            <label>User Id: </label>
                            <div>{this.state.activities.registerUser.firstName}</div>
                        </div>
                        <div className = "row">
                            <label>learning Activity Id: </label>
                            <div>{this.state.activities.learningActivity.activityName}</div>
                        </div>
                        <div className = "row">
                            <label>Status: </label>
                            <div>{this.state.activities.status}</div>
                        </div>
                        <div className = "row">
                            <label>Certificate: </label>
                            <div>{this.state.activities.certificate}</div>
                        </div>

                    </div>
               </div>
            </div>
        );
    }
}

export default ViewUserActivityComponent;