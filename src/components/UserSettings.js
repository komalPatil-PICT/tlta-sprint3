import React, { Component } from 'react';
import ChangePassword from './User/ChangePassword';

class UserSettings extends Component {
    render() {
        return (
            <div>
                <ChangePassword {...this.props}/>              
            </div>
        );
    }
}

export default UserSettings;