import React, { Component } from 'react';
import ListUsersActivityComponent from './Admin/adminUsersActivityComponents/ListUsersActivityComponent';


class AdminReviewCertificates extends Component {
    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <ListUsersActivityComponent {...this.props}/>

            </div>
        );
    }
}

export default AdminReviewCertificates;