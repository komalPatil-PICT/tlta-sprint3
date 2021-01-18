import React, { Component } from 'react';
import ListUserActivity from './Admin/adminUsersActivityComponents/ListUsersActivityComponent';
import Header from '../components/Header';

class AdminReviewCertificates extends Component {
    render() {
        return (
            <div>
                <Header/>.
                <div className="container">
                <ListUserActivity  {...this.props}/>
                </div>
            </div>
        );
    }
}

export default AdminReviewCertificates;