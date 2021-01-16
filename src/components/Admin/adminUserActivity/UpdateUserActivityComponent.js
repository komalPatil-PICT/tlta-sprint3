import React, { Component } from 'react';
import ActivityService from '../../../services/AdminUserActivityService';

class UpdateUserActivityComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userActivityId: this.props.match.params.userActivityId,
            userId: '',
            learningActivityId: '',
            status: 'REGISTER',
            certificate: ''
        }
        this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
        this.changeLearningActivityIdHandler = this.changeLearningActivityIdHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.changeCertificateHandler = this.changeCertificateHandler.bind(this);
        this.updateUserActivity = this.updateUserActivity.bind(this);
    }

    componentDidMount() {
        ActivityService.getUserActivityById(this.state.userActivityId).then((res) => {
            let userActivity = res.data;
            this.setState({
                userActivityId: userActivity.userActivityId,
                userId: userActivity.userId,
                learningActivityId: userActivity.learningActivityId,
                state: userActivity.status,
                certificate: userActivity.certificate
            });
        });
    }

    updateUserActivity = (e) => {
        e.preventDefault();
        let userActivity = {
            userActivityId: this.state.userActivityId, userId: this.state.userId, learningActivityId: this.state.learningActivityId,
            status: this.state.status, certificate: this.state.certificate
        };
        console.log(JSON.stringify(userActivity));
        ActivityService.updateUserActivity(userActivity, this.state.id).then((res) => {
            this.props.history.push('/userActivity');
        });
    }

    cancel() {
        this.props.history.push('/userActivity');
    }

    changeUserIdHandler = (event) => {
        this.setState({ userId: event.target.value });
    }

    changeLearningActivityIdHandler = (event) => {
        this.setState({ learningActivityId: event.target.value });
    }

    changeStatusHandler = (event) => {
        this.setState({ status: event.target.value });
    }

    changeCertificateHandler = (event) => {
        this.setState({ certificate: event.target.value });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Edit Assessment</h3>
                            <div className="card-body">
                                <form>
                                    {/* <div className="form-group">
                                        <label>Enter Assessment Name</label>
                                        <input placeholder="Assessment Name" name="assessmentName"
                                            className="form-control" value={this.state.assessmentName}
                                            onChange={this.changeUserIdHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Enter Assessment Type</label>
                                        <input placeholder="Assessment Type" name="assessmentType"
                                            className="form-control" value={this.state.assessmentType}
                                            onChange={this.changeLearningActivityIdHandler} />
                                    </div> */}
                                    {/* <div className="form-group">
                                        <label>Enter Assessment Release Date</label>
                                        <input placeholder="Released Date" name="assessmentReleaseDate"
                                            className="form-control" value={this.state.assessmentReleaseDate}
                                            onChange={this.changeStatusHandler} />
                                    </div> */}

                                    <div className="form-group">
                                    <label>Enter Status</label>
                                            <select value={this.state.status} onChange={this.changeStatusHandler} name="status">
                                                <option value="REGISTER">REGISTER</option>
                                                <option value="APPROVE">APPROVE</option>
                                                <option value="DISAPPROVE">DISAPPROVE</option>
                                            </select>
                                    </div>
                                    <button className = "btn btn-success" onClick = {this.updateUserActivity}>Update</button>
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

export default UpdateUserActivityComponent;