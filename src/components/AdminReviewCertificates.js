import React, { Component } from 'react';
import ListUserActivity from './Admin/adminUserActivity/ListUserActivityComponent';

class AdminReviewCertificates extends Component {
    render() {
        return (
            <div>
                <h1>Welcome</h1>
               // <ListUsersActivityComponent {...this.props}/>

                <ListUserActivity  {...this.props}/>
            </div>
        );
    }
}

export default AdminReviewCertificates;