import React, { Component } from 'react';
import AdminUsersActivityService from '../../../services/AdminUsersActivityService';

class UpdateUsersActivityComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userActivityId:this.props.match.params.userActivityId,
            registerUser:'',
            learningActivity:'',
            status: 'register',
            certificate:'',
            file:''
            // isLoaded:false
         
        }
        console.log("THIS.STATE:"+this.state.userActivityId);

    // this.changeUsersNameHandler= this.changeUsersNameHandler.bind(this);
    // this.changeActivityNameHandler= this.changeActivityNameHandler.bind(this);
    this.changeStatusHandler = this.changeStatusHandler.bind(this);
    // this.changeCertificateHandler = this.changeCertificateHandler.bind(this);
    this.UpdateUsersActivity = this.UpdateUsersActivity.bind(this);
    }     

    componentDidMount(){
        AdminUsersActivityService.getUserActivityById(this.state.userActivityId)
        .then((res)=>{
            let userActivity =  res.data;
            this.setState({
                userActivityId: userActivity.userActivityId,
                registerUser:userActivity.registerUser,
                learningActivity:userActivity.learningActivity,
                status: userActivity.status,
                certificate:userActivity.certificate,
                file:userActivity.file
                // isLoaded:true
               
            });
        console.log("updated:"+userActivity.userActivityId+userActivity.status);

        });
    }

    UpdateUsersActivity = (e)=>{
        e.preventDefault();
        let userActivity ={
            userActivityId:this.state.userActivityId,
            registerUser:this.state.registerUser,
            learningActivity:this.state.learningActivity,
            status: this.state.status,
            certificate:this.state.certificate,
            file: this.state.file
        };
        console.log(JSON.stringify(userActivity));
        AdminUsersActivityService.updateUserActivityStatus(userActivity,this.state.userActivityId)
        .then((res) =>{
            this.props.history.push('/userActivity');
       });
    }  
    
    cancel(){
        this.props.history.push('/userActivity');
    }

    // changeUsersNameHandler = (event) =>{
    //     this.setState({userName: event.target.value});
    // }

    // changeActivityNameHandler = (event) =>{
    //     this.setState({activityName: event.target.value});
   // }

    changeStatusHandler = (event) =>{
        this.setState({status: event.target.value});
    }

    // changeCertificateHandler = (event) =>{
    //     this.setState({certificate: event.target.value});
    // }

   

    render() {
        return (
            <div>               
                <div className="container">
                    <div className="row"> 
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Edit Status</h3>
                            {/* {this.state.isLoaded? */}
                            <div className = "card-body">
                                <form >
                                    <div className="form-group"> 
                                    <label>Status
                                            <select value={this.state.status} onChange={this.changeStatusHandler}>
                                                <option value="register">Register</option>
                                                <option value="approved">Approved</option>
                                                <option value="rejected">Rejected</option>
                                            </select>
                                        </label>  
                                    </div>
                                    
                                    <button className = "btn btn-success" onClick = {this.UpdateUsersActivity}>Update</button>
                                    <button className = "btn btn-danger" onClick = {this.cancel.bind(this)} style = {{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                            {/* :null} */}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default UpdateUsersActivityComponent;