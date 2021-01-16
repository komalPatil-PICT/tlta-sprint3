import React, { Component } from 'react';
import ListActivityComponent from './User/ListLearningActivityComponent';


class UserBrowsePage extends Component {
    render() {
        return (
            <div>
                <h2>Welcome </h2>    
                <ListActivityComponent {...this.props}/>              
            
            </div>
        );
    }
}

export default UserBrowsePage;