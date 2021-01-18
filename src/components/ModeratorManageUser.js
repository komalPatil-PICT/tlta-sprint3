import React, { Component } from 'react';
//import ListUserComponent from './Admin/adminUserComponent/ListUserComponent';
import ModeratorComponent from './Admin/adminUserComponent/ModeratorListComponent';

class ModeratorManageUser extends Component {
    render() {
        return (
            <div>
                <ModeratorComponent {...this.props}/>
            </div>
        );
    }
}

export default ModeratorManageUser;
