import React, { Component } from 'react';
import ActivityService from '../../../services/AdminLearningActivityService';

class UpdateActivityComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            id: this.props.match.params.id,
            activityName: '',
            activityLink: '',
            activityLevel: '',
            activityTime: '',
            activityReleaseDate:'',
            assesment:''
        }

        this.changeActivityNameHandler = this.changeActivityNameHandler.bind(this);
        this.changeActivityLinkHandler = this.changeActivityLinkHandler.bind(this);
        this.changeActivityLevelHandler = this.changeActivityLevelHandler.bind(this);
        this.changeActivityTimeHandler = this.changeActivityTimeHandler.bind(this);
        this.changeActivityReleaseDateHandler = this.changeActivityReleaseDateHandler.bind(this);
        this.changeAssessmentHandler = this.changeAssessmentHandler.bind(this);
        this.updateActivity = this.updateActivity.bind(this);
    }

    componentDidMount() {
        ActivityService.getActivityById(this.state.id).then((res) => {
            let activity = res.data;
            this.setState({
                id: activity.id,
                activityName: activity.assessmentName,
                activityLink: activity.assessmentType,
                activityLevel: activity.assessmentReleaseDate,
                activityTime: activity.assessmentTimeDuration,
                activityReleaseDate: activity.activityReleaseDate,
                assesment:activity.assessment
            });
        });
    }

    updateActivity = (e) => {
        e.preventDefault();
        let activity = {
            id: this.state.id, activityName: this.state.activityName, activityLink: this.state.activityLink,
            activityLevel: this.state.activityLevel, activityTime: this.state.activityTime, activityReleaseDate : this.state.assessmentReleaseDate,
            assesment : this.state.assesment
        };
        console.log(JSON.stringify(activity));
        ActivityService.updateActivity(activity, this.state.id).then((res) => {
            this.props.history.push('/activities');
        });

    }

    cancel() {
        this.props.history.push('/activities');
    }

    changeActivityNameHandler = (event) => {
        this.setState({ activityName: event.target.value });
    }

    changeActivityLinkHandler = (event) => {
        this.setState({ activityLink: event.target.value });
    }

    changeActivityLevelHandler = (event) => {
        this.setState({ activityLevel: event.target.value });
    }

    changeActivityTimeHandler = (event) => {
        this.setState({ activityTime: event.target.value });
    }

    changeActivityReleaseDateHandler = (event) => {
        this.setState({ activityReleaseDate: event.target.value });
    }
    changeAssessmentHandler = (event) => {
        this.setState({ assesment: event.target.value });
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Edit Activity</h3>
                            <div className="card-body">
                                <form>
                                <div className="form-group">
                                        <label>Enter Activity Name</label>
                                        <input placeholder="Activity Name" name="activityName"
                                            className="form-control" value={this.state.activityName}
                                            onChange={this.changeActivityNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Enter Activity Link</label>
                                        <input placeholder="Activity Link" name="activityLink"
                                            className="form-control" value={this.state.activityLink}
                                            onChange={this.changeActivityLinkHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Enter Activity Level</label>
                                        <input placeholder="Activity Level" name="activityLevel"
                                            className="form-control" value={this.state.activityLevel}
                                            onChange={this.changeActivityLevelHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label>Enter Activity Time in Hours</label>
                                        <input placeholder="Activity Time" name="activityTime"
                                            className="form-control" value={this.state.activityTime}
                                            onChange={this.changeActivityTimeHandler} />
                                    </div>

                                    
                                    <div className="form-group">
                                        <label>Enter activity Release Date</label>
                                        <input placeholder="activity Release Date" name="activityReleaseDate"
                                            className="form-control" value={this.state.activityReleaseDate}
                                            onChange={this.changeActivityReleaseDateHandler} />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label>Enter assesment ID</label>
                                        <input placeholder="assesment ID" name="assesment"
                                            className="form-control" value={this.state.assesment}
                                            onChange={this.changeAssessmentHandler} />
                                    </div>
                                    <button className = "btn btn-success" onClick = {this.updateActivity}>Update</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default UpdateActivityComponent;