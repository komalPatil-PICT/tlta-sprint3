import React, { Component } from 'react';
import ListUserActivity from './Admin/adminUsersActivityComponents/ListUsersActivityComponent';

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