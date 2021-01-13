import React, { Component } from 'react';
import ListAssessment from './Admin/adminAssessmentComponents/ListAssessmentComponent';

class AdminManageAssessments extends Component {
    render() {
        return (
            <div>
                <ListAssessment {...this.props}/>
            </div>
        );
    }
}

export default AdminManageAssessments;