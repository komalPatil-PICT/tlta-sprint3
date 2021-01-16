import axios from 'axios';

const USERSACTIVITY_API_BASE_URL = "http://localhost:8080/springfox/api/userActivity";

class AdminUsersActivityService {
    getUserActivity(){
        return axios.get(USERSACTIVITY_API_BASE_URL+'/');
    }

    getUserActivityById(userActivityId){
        return axios.get(USERSACTIVITY_API_BASE_URL+'/'+userActivityId);
    }

    createUser(activity){
        return axios.post(USERSACTIVITY_API_BASE_URL+'/',activity);
    }


    updateUserActivityStatus(userActivity,userActivityId){
        return axios.put(USERSACTIVITY_API_BASE_URL+'/'+userActivityId,userActivity);
    }

}

//exporting EmployeeService object
export default new AdminUsersActivityService();