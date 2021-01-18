import React, { Component } from 'react';
import ListActivities from './Admin/adminActivityComponent/ListActivityComponent';
import Header from './Header';


class AdminManageActivities extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
               <ListActivities {...this.props}/>
               </div>
            </div>
        );
    }
}

export default AdminManageActivities;