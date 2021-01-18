import './App.css';
//  import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminDashBoard from './components/AdminDashBoard';
import ModeratorDashBoard from './components/ModeratorDashBoard';

import NotFound from './components/NotFound';
import AdminManageUser from "./components/AdminManageUser";
import ModeratorManageUser from "./components/ModeratorManageUser";
import AdminManageActivity from "./components/AdminManageActivities";
import ModeratorManageActivities from "./components/ModeratorManageActivities";
import AdminManageAssessments from './components/AdminManageAssessments';
import ModeratorManageAssessments from './components/ModeratorManageAssessments';

import FooterComponent from './components/FooterComponent';
import ListAssessment from './components/Admin/adminAssessmentComponents/ListAssessmentComponent';
import AddAssessment from './components/Admin/adminAssessmentComponents/CreateAssessmentComponent';
import UpdateAssessment from './components/Admin/adminAssessmentComponents/UpdateAssessmentComponent';
import ViewAssessment from './components/Admin/adminAssessmentComponents/ViewAssessmentComponent';
import ListUsers from './components/Admin/adminUserComponent/ListUserComponent';
import AddUser from './components/Admin/adminUserComponent/CreateUserComponent';
import UpdateUser from './components/Admin/adminUserComponent/UpdateUserComponent';
import ViewUser from './components/Admin/adminUserComponent/ViewUserComponent';

import ListActivities from './components/Admin/adminActivityComponent/ViewActivityComponent';
import AddActivity from './components/Admin/adminActivityComponent/CreateActivityComponent';
import UpdateActivity from './components/Admin/adminActivityComponent/UpdateActivityComponent';
import ViewActivity from './components/Admin/adminActivityComponent/ViewActivityComponent';

import ListUsersActivityComponent from './components/Admin/adminUsersActivityComponents/ListUsersActivityComponent';
import UpdateUsersActivityComponent from './components/Admin/adminUsersActivityComponents/UpdateUsersActivityComponent';
import ViewUsersActivityComponent from './components/Admin/adminUsersActivityComponents/ViewUsersActivityComponent';

//import UserHeader from './components/UserHeader';
import UserDashBoard from './components/UserDashboard';
import UserHomePage from './components/UserHomePage';
import UserBrowsePage from './components/UserBrowsePage';
import UserMyProfile from './components/UserMyProfile';
import UserSettings from './components/UserSettings';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import ViewLearningActivityComponent from './components/User/ViewLearningActivityComponent';
import RegisterForActivityComponent from './components/User/RegisterForActivityComponent';

import Login from './Login';
import Logout from './Logout';
import ForgetPassword from './components/ForgetPassword';

const AppRouter = () => (
    <BrowserRouter>
       {/* <Header /> */}
        <div className='container-fluid'>
            <Switch>
                <Route path="/admin" component={AdminDashBoard} exact={true} />
                <Route path="/moderator" component={ModeratorDashBoard} exact={true} />
                <Route path="/" component={Login} exact={true} />
                <Route path="/logout" component={Logout} exact={true} />
                <Route path="/forgetPassword" component={ForgetPassword} />


                <Route path="/adminManageUsers" component={AdminManageUser} />
                <Route path="/adminActivities" component={AdminManageActivity} />
                <Route path="/adminAssessments" component={AdminManageAssessments} />
                

                <Route path="/userDashboard" component={UserDashBoard} exact={true} />
                <Route path="/userHomePage" component={UserHomePage} />
                <Route path="/browsePage" component={UserBrowsePage} />
                <Route path="/myProfile" component={UserMyProfile} />
                <Route path="/settings" component={UserSettings} />
                <Route path="/aboutUs" component={AboutUs} />
                <Route path="/contactUs" component={ContactUs} />


                <Route path="/user-home/:id" component={ViewLearningActivityComponent} />
                <Route path="/add-activity" component={RegisterForActivityComponent} />


                <Route path="/assessments" component={ListAssessment} />
                <Route path="/add-assessment" component={AddAssessment} />
                <Route path = "/update-assessment/:id" component= {UpdateAssessment}></Route>
                <Route path = "/view-assessment/:id" component= {ViewAssessment}></Route>  

                <Route path="/usersActivity" component={ListUsersActivityComponent} />
                <Route path="/update-userActivity/:id" component={UpdateUsersActivityComponent} ></Route> 
                <Route path="/view-userActivity/:id" component={ViewUsersActivityComponent} ></Route>  


                <Route path="/users" component={ListUsers} />
                <Route path="/add-user" component={AddUser} />
                <Route path = "/update-user/:id" component= {UpdateUser}></Route>
                <Route path = "/view-user/:id" component= {ViewUser}></Route>             

                <Route path="/activities" component={ListActivities} />
                <Route path="/add-learning-activity" component={AddActivity} />
                <Route path = "/update-activity/:id" component= {UpdateActivity}></Route>
                <Route path = "/view-activity/:id" component= {ViewActivity}></Route>  

                <Route path="/moderatorManageUsers" component={ModeratorManageUser} />
                <Route path="/moderatorManageActivities" component={ModeratorManageActivities} />
                <Route path="/moderatorManageAssessments" component={ModeratorManageAssessments} />

                
                <Route component={NotFound} />
            </Switch>
        </div>
        <FooterComponent />
    </BrowserRouter>
);

export default AppRouter;