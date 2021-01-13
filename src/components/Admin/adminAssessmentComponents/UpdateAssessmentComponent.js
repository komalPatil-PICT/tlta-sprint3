import React, { Component } from 'react';
import AssessmentService from '../../../services/AdminAssessmentService';

class UpdateAssessmentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            assessmentName: '',
            assessmentType: '',
            assessmentReleaseDate: '',
            assessmentTimeDuration: ''
        }
        this.changeAssessmentNameHandler = this.changeAssessmentNameHandler.bind(this);
        this.changeAssessmentTypeHandler = this.changeAssessmentTypeHandler.bind(this);
        this.changeAssessmentReleaseDateHandler = this.changeAssessmentReleaseDateHandler.bind(this);
        this.changeAssessmentTimeDurationHandler = this.changeAssessmentTimeDurationHandler.bind(this);
        this.updateAssessment = this.updateAssessment.bind(this);
    }

    componentDidMount() {
        AssessmentService.getAssessmentById(this.state.id).then((res) => {
            let assessment = res.data;
            this.setState({
                id: assessment.id,
                assessmentName: assessment.assessmentName,
                assessmentType: assessment.assessmentType,
                assessmentReleaseDate: assessment.assessmentReleaseDate,
                assessmentTimeDuration: assessment.assessmentTimeDuration
            });
        });
    }

    updateAssessment = (e) => {
        e.preventDefault();
        let assessment = {
            id: this.state.id, assessmentName: this.state.assessmentName, assessmentType: this.state.assessmentType,
            assessmentReleaseDate: this.state.assessmentReleaseDate, assessmentTimeDuration: this.state.assessmentTimeDuration
        };
        console.log(JSON.stringify(assessment));
        AssessmentService.updateAssessment(assessment, this.state.id).then((res) => {
            this.props.history.push('/assessments');
        });
    }

    cancel() {
        this.props.history.push('/assessments');
    }

    changeAssessmentNameHandler = (event) => {
        this.setState({ assessmentName: event.target.value });
    }

    changeAssessmentTypeHandler = (event) => {
        this.setState({ assessmentType: event.target.value });
    }

    changeAssessmentReleaseDateHandler = (event) => {
        this.setState({ assessmentReleaseDate: event.target.value });
    }

    changeAssessmentTimeDurationHandler = (event) => {
        this.setState({ assessmentTimeDuration: event.target.value });
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
                                    <div className="form-group">
                                        <label>Enter Assessment Name</label>
                                        <input placeholder="Assessment Name" name="assessmentName"
                                            className="form-control" value={this.state.assessmentName}
                                            onChange={this.changeAssessmentNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Enter Assessment Type</label>
                                        <input placeholder="Assessment Type" name="assessmentType"
                                            className="form-control" value={this.state.assessmentType}
                                            onChange={this.changeAssessmentTypeHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Enter Assessment Release Date</label>
                                        <input placeholder="Released Date" name="assessmentReleaseDate"
                                            className="form-control" value={this.state.assessmentReleaseDate}
                                            onChange={this.changeAssessmentReleaseDateHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label>Enter Assessment Time Duration in hours</label>
                                        <input placeholder="Time Duration" name="assessmentTimeDuration"
                                            className="form-control" value={this.state.assessmentTimeDuration}
                                            onChange={this.changeAssessmentTimeDurationHandler} />
                                    </div>
                                    <button className = "btn btn-success" onClick = {this.updateAssessment}>Update</button>
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

export default UpdateAssessmentComponent;