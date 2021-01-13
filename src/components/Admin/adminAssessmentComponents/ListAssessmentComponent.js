import React, { Component } from 'react';
import AssessmentService from '../../../services/AdminAssessmentService';

class ListAssessmentComponent extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            assessments: []
        }
        this.addAssessment = this.addAssessment.bind(this);
        this.editAssessment = this.editAssessment.bind(this);
        this.deleteAssessment = this.deleteAssessment.bind(this);
        this.viewAssessment = this.viewAssessment.bind(this);
    }

    componentDidMount(){
        AssessmentService.getAssessment()
        .then((res) => {
            this.setState({assessments: res.data});
        });
    }

    addAssessment(){
        this.props.history.push('/add-assessment');
    }

    editAssessment(id){
        this.props.history.push(`/update-assessment/${id}`)
    }

    deleteAssessment(id){
        AssessmentService.deleteAssessment(id).then((res) => {
            this.setState({assessments: this.state.assessments.filter( assessment => assessment.id !== id)});
        });
    }

    viewAssessment(id){
        
        this.props.history.push(`/view-assessment/${id}`);
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Assessments List</h2>
                <div className="form-group"> 
                    <button class="btn btn-success btn-lg float-right" onClick={this.addAssessment}>Add Assessment</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>                                
                                <th>Assessment Id</th>
                                <th>Assessment Name</th>
                                <th>Assessment Type</th>
                                <th>Assessment Released Date</th>
                                <th>Assessment Time Duration</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                
                                this.state.assessments.map(
                                    assessment => 
                                    <tr key= {assessment.id}>
                                        <td>{assessment.id}</td>
                                        <td>{assessment.assessmentName}</td>
                                        <td>{assessment.assessmentType}</td>
                                        <td>{assessment.assessmentReleaseDate}</td>
                                        <td>{assessment.assessmentTimeDuration}</td>
                                        <td>
                                            <button onClick = {()=>this.editAssessment(assessment.id)} className = "btn btn-info">Edit</button>
                                        </td>
                                        <td>
                                            <button  style = {{marginLeft: "10px"}} onClick = {()=>this.deleteAssessment(assessment.id)} className = "btn btn-danger">Delete</button>
                                        </td>

                                        <td>
                                            <button  style = {{marginLeft: "10px"}} onClick = {()=>this.viewAssessment(assessment.id)} className = "btn btn-info">View</button>
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

export default ListAssessmentComponent;