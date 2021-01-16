import React, { Component } from 'react';
import ListActivities from './Admin/adminActivityComponent/ListActivityComponent';

class ModeratorManageActivities extends Component {
    render() {
        return (
            <div>
               <ListActivities {...this.props}/>
            </div>
        );
    }
}

export default ModeratorManageActivities;