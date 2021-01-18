import React, { Component } from 'react';
import ListActivityComponent from './User/ListLearningActivityComponent';


class UserBrowsePage extends Component {
    render() {
        return (
            <div>
                <ListActivityComponent {...this.props}/>              
            
            </div>
        );
    }
}

export default UserBrowsePage;