import React, { Component } from 'react';
import AdminUsersActivityService from '../../services/AdminUsersActivityService';
import UserHeader from '../UserHeader';

class RegisterForActivityComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
                userId:'',
                learningActivityId: '',
                status: 'register',
                certificate: ''
        }
        this.changeUsersNameHandler= this.changeUsersNameHandler.bind(this);
        this.changeActivityNameHandler= this.changeActivityNameHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.changeCertificateHandler = this.changeCertificateHandler.bind(this);
        this.saveUsersActivity = this.saveUsersActivity.bind(this);
    }     

    saveUsersActivity = (e)=>{
        e.preventDefault();
        let usersActivity ={ userId: this.state.userId,learningActivityId: this.state.learningActivityId,
            status: this.state.status, certificate: this.state.certificate
        };
        console.log(JSON.stringify(usersActivity));
        AdminUsersActivityService.createUser(usersActivity).then(res =>{
            this.props.history.push('/browsePage');
        })
    }  
    
    cancel(){
        this.props.history.push('/browsePage');
    }

    changeUsersNameHandler = (event) =>{
        this.setState({userId: event.target.value});
    }

    changeActivityNameHandler = (event) =>{
        this.setState({learningActivityId: event.target.value});
    }

    changeStatusHandler = (event) =>{
        this.setState({status: event.target.value});
    }

    changeCertificateHandler = (event) =>{
        this.setState({certificate: event.target.value});
    }

   

    render() {
        return (
            <div>               
                <UserHeader/>
                <div className="container card-view">
                    <div className="row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Users Activity</h3>
                            <div className = "card-body">
                                <form>
                                    <div className="form-group"> 
                                        <label>Enter User Id</label>
                                        <input placeholder="User Name" name="userName"
                                            className="form-control" value = {this.state.userId} 
                                            onChange = {this.changeUsersNameHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        <label>Enter Avtivity Id</label>
                                        <input placeholder="Activity Name" name="activityName"
                                            className="form-control" value = {this.state.learningActivityId} 
                                            onChange = {this.changeActivityNameHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        <label>Status
                                            <select value={this.state.status} onChange={this.changeStatusHandler}>
                                                <option value="register">Register</option>
                                            </select>
                                        </label>                              
                                    </div>
                                    <div className="form-group"> 
                                        <label>Certificate</label>
                                        <input placeholder="Certificate" name="certificate"
                                            className="form-control" value = {this.state.certificate} 
                                            onChange = {this.changeCertificateHandler}/>
                                    </div>
                                    <button className = "btn btn-success" onClick = {this.saveUsersActivity}>Save</button>
                                    <button className = "btn btn-danger" onClick = {this.cancel.bind(this)} style = {{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default RegisterForActivityComponent;