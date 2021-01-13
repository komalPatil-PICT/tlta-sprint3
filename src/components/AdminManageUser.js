import React, { Component } from 'react';
import ListUserComponent from './Admin/adminUserComponent/ListUserComponent';

class AdminManageUser extends Component {
    render() {
        return (
            <div>
                <ListUserComponent {...this.props}/>
            </div>
        );
    }
}

export default AdminManageUser;
