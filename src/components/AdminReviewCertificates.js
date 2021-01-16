import React, { Component } from 'react';
import ListUserActivity from './Admin/adminUserActivity/ListUserActivityComponent';

class AdminReviewCertificates extends Component {
    render() {
        return (
            <div>
                <ListUserActivity  {...this.props}/>
            </div>
        );
    }
}

export default AdminReviewCertificates;