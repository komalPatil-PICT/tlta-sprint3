import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminDashBoard from './components/AdminDashBoard';
import NotFound from './components/NotFound';
import AdminManageUser from "./components/AdminManageUser";
import AdminManageActivity from "./components/AdminManageActivities";
import AdminManageAssessments from './components/AdminManageAssessments';
import AdminReviewCertificates from './components/AdminReviewCertificates';
import FooterComponent from './components/FooterComponent';
import ListAssessment from './components/Admin/adminAssessmentComponents/ListAssessmentComponent';
import AddAssessment from './components/Admin/adminAssessmentComponents/CreateAssessmentComponent';
import UpdateAssessment from './components/Admin/adminAssessmentComponents/UpdateAssessmentComponent';
import ViewAssessment from './components/Admin/adminAssessmentComponents/ViewAssessmentComponent';

import ListUsersActivityComponent from './components/Admin/adminUsersActivityComponents/ListUsersActivityComponent';
import UpdateUsersActivityComponent from './components/Admin/adminUsersActivityComponents/UpdateUsersActivityComponent';
import ViewUsersActivityComponent from './components/Admin/adminUsersActivityComponents/ViewUsersActivityComponent';

//import UserHeader from './components/UserHeader';
import UserDashBoard from './components/UserDashboard';
import UserHomePage from './components/UserHomePage';
import UserBrowsePage from './components/UserBrowsePage';
import UserMyProfile from './components/UserMyProfile';
import UserSettings from './components/UserSettings';
import ViewLearningActivityComponent from './components/User/ViewLearningActivityComponent';
import RegisterForActivityComponent from './components/User/RegisterForActivityComponent';

const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <div className='container'>
            <Switch>
                <Route path="/" component={AdminDashBoard} exact={true} />
                <Route path="/adminManageUsers" component={AdminManageUser} />
                <Route path="/adminActivities" component={AdminManageActivity} />
                <Route path="/adminAssessments" component={AdminManageAssessments} />
                <Route path="/usersActivities" component={AdminReviewCertificates} />

                <Route path="/userDashboard" component={UserDashBoard} exact={true} />
                <Route path="/userHomePage" component={UserHomePage} />
                <Route path="/browsePage" component={UserBrowsePage} />
                <Route path="/myProfile" component={UserMyProfile} />
                <Route path="/settings" component={UserSettings} />

                <Route path="/user-home/:id" component={ViewLearningActivityComponent} />
                <Route path="/add-activity" component={RegisterForActivityComponent} />


                <Route path="/assessments" component={ListAssessment} />
                <Route path="/add-assessment" component={AddAssessment} />
                <Route path = "/update-assessment/:id" component= {UpdateAssessment}></Route>
                <Route path = "/view-assessment/:id" component= {ViewAssessment}></Route>  

                <Route path="/userActivity" component={ListUsersActivityComponent} />
                <Route path="/update-userActivity/:id" component={UpdateUsersActivityComponent} ></Route> 
                <Route path="/view-userActivity/:id" component={ViewUsersActivityComponent} ></Route>  


                <Route component={NotFound} />
            </Switch>
        </div>
        <FooterComponent />
    </BrowserRouter>
);

export default AppRouter;