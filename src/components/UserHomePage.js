import React, { Component } from 'react';
import ViewLearningActivityComponent from '../components/User/ViewLearningActivityComponent';

class UserHomePage extends Component {
    render() {
        return (
            <div>
                <h2>Welcome </h2>  
                <ViewLearningActivityComponent {...this.props}/>
            </div>
        );
    }
}

export default UserHomePage;