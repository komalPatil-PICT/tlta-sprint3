import React, { Component } from 'react';
import ListUserComponent from './Admin/adminUserComponent/ListUserComponent';
import Header from './Header';

class AdminManageUser extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                <ListUserComponent {...this.props}/>
                </div>
               
            </div>
        );
    }
}

export default AdminManageUser;
