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
import ListUsers from './components/Admin/adminUserComponent/ListUserComponent';
import AddUser from './components/Admin/adminUserComponent/CreateUserComponent';
import UpdateUser from './components/Admin/adminUserComponent/UpdateUserComponent';
import ViewUser from './components/Admin/adminUserComponent/ViewUserComponent';

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

                <Route path="/assessments" component={ListAssessment} />
                <Route path="/add-assessment" component={AddAssessment} />
                <Route path = "/update-assessment/:id" component= {UpdateAssessment}></Route>
                <Route path = "/view-assessment/:id" component= {ViewAssessment}></Route>             

                <Route path="/users" component={ListUsers} />
                <Route path="/add-user" component={AddUser} />
                <Route path = "/update-user/:id" component= {UpdateUser}></Route>
                <Route path = "/view-user/:id" component= {ViewUser}></Route>             

                <Route component={NotFound} />
            </Switch>
        </div>
        <FooterComponent />
    </BrowserRouter>
);

export default AppRouter;