import React, { Component } from 'react';
import AssessmentService from '../../../services/AdminAssessmentService';


class ViewAssessmentComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            assessment: {}
        }

    }

    componentDidMount(){
        AssessmentService.getAssessmentById(this.state.id).then( res => {
            this.setState({assessment: res.data});
        })
    }

    render() {
        return (
            <div>
               <div className= "card col-md-6 offset-md-3">
                    <h3 className = "text-center">View Assessment Details</h3>
                    <div className= "card-body">
                        <div className = "row">
                            <label>Assessment Name: </label>
                            <div>{this.state.assessment.assessmentName}</div>
                        </div>
                        <div className = "row">
                            <label>Assessment Type: </label>
                            <div>{this.state.assessment.assessmentType}</div>
                        </div>
                        <div className = "row">
                            <label>Assessment Release Date: </label>
                            <div>{this.state.assessment.assessmentReleaseDate}</div>
                        </div>
                        <div className = "row">
                            <label>Assessment Time Duration: </label>
                            <div>{this.state.assessment.assessmentTimeDuration}</div>
                        </div>

                    </div>
               </div>
            </div>
        );
    }
}



export default ViewAssessmentComponent;