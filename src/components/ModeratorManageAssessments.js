import React, { Component } from 'react';
import ListAssessment from './Admin/adminAssessmentComponents/ListAssessmentComponent';

class ModeratorManageAssessments extends Component {
    render() {
        return (
            <div>
                <ListAssessment {...this.props}/>
            </div>
        );
    }
}

export default ModeratorManageAssessments;