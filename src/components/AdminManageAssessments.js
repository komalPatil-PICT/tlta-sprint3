import React, { Component } from 'react';
import ListAssessment from './Admin/adminAssessmentComponents/ListAssessmentComponent';
import Header from './Header';

class AdminManageAssessments extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                <ListAssessment {...this.props}/>
                </div>
            </div>
        );
    }
}

export default AdminManageAssessments;