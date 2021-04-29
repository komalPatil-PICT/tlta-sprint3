import React, { Component } from 'react';
import ActivityService from '../../../services/AdminLearningActivityService';
import Header from '../../Header';

class ViewActivityComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            activity: {},
            isLoaded:false
        }
    }

    componentDidMount(){
        ActivityService.getActivityById(this.state.id).then( res => {
            this.setState({activity: res.data,isLoaded:true});
        })
    }

    render() {
        return (
            <div>
                <Header/>
               <div className= "card col-md-6 offset-md-3 card-view">
                    <h3 className = "text-center mt-4">View Activity Details</h3>
                    {this.state.isLoaded?
                    <div className= "card-body">
                        <div className = "row">
                            <label>Activity Name: </label>
                            <div>{this.state.activity.activityName}</div>
                        </div>
                        <div className = "row">
                            <label>Activity Link: </label>
                            <div>{this.state.activity.activityLink}</div>
                        </div>
                        <div className = "row">
                            <label>Activity Level: </label>
                            <div>{this.state.activity.activityLevel}</div>
                        </div>
                        
                        <div className = "row">
                            <label>Activity Time: </label>
                            <div>{this.state.activity.activityTime}</div>
                        </div>
                        
                        <div className = "row">
                            <label>Activity Release Date: </label>
                            <div>{this.state.activity.activityReleaseDate}</div>
                        </div>
                        <div className = "row">
                            <label>Assessment Name: </label>
                            <div>{this.state.activity.assesment.assessmentName}</div>
                        </div>

                    </div>
                    :null}
               </div>
            </div>
        );
    }
}



export default ViewActivityComponent;