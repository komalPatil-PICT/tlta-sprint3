import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashBoard from './components/DashBoard';
import NotFound from './components/NotFound';

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

// export default App;

const AppRouter = () => (
  <BrowserRouter>
      <Header />
      <div className='container'>
          <Switch>
              <Route path="/" component={DashBoard} exact={true} />
              {/* <Route path="/users" component={} />
              <Route path="/assessments" componenet={} />
              <Route path="/activities" component={} />
              <Route path="/usersActivities" component={} />
               */}
              <Route component={NotFound} />
          </Switch>
      </div>
  </BrowserRouter>
);

export default AppRouter;