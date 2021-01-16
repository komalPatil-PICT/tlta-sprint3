import React, { Component } from 'react';
import AdminUsersActivityService from '../../../services/AdminUsersActivityService';


class ViewUsersActivityComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            userActivities: {},
            isLoaded:false
        }
        console.log("ID:"+this.state.id);

        

    }

    componentDidMount(){
        AdminUsersActivityService.getUserActivityById(this.state.id)
        .then( res => {
           this.setState({userActivities:res.data, isLoaded:true});
        });
        // AdminUsersActivityService.getUserActivityById(this.state.id)
        // .then( res => {
        //     // var userActivity=res.data;
        // //    this.state.userActivities=userActivity;
        //    this.setState({userActivities:res.data});
        // //this.state.userActivities=res.data;
        // //    console.log("cdm:"+res.data);

        // })
    }

    render() {
        return (
            <div>                  
               <div className= "card col-md-6 offset-md-3">
                    <h3 className = "text-center">View Employee Details</h3>
                    {this.state.isLoaded?
                        <div className= "card-body">
                    
                            <div className = "row" >
                                <label>User Id:</label>
                                 <div>{this.state.userActivities.userActivityId}</div>
                            </div>
                            <div className = "row">
                                <label>User Name: </label>
                                <div>{this.state.userActivities.registerUser.firstName}</div>
                            </div>
                            <div className = "row">
                                <label>Activity Name: </label>
                                <div>{this.state.userActivities.learningActivity.activityName}</div>
                            </div>
                            <div className = "row">
                                <label>Status: </label>
                                <div>{this.state.userActivities.status}</div>
                            </div>
                            <div className = "row">
                                <label>Certificate: </label>
                                <div>{this.state.userActivities.certificate}</div>
                            </div>   
                        </div>
                    :null } 

               </div>
            </div>
        );
    }
}



export default ViewUsersActivityComponent;