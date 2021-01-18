import React, { Component } from 'react';
import MyProfileComponent from './User/MyProfileComponent';

class UserMyProfile extends Component {
    render() {
        return (
            <div>
                <MyProfileComponent {...this.props}/>            
            </div>
        );
    }
}

export default UserMyProfile;