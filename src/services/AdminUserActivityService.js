import axios from 'axios';

const USER_ACTIVITY_API_BASE_URL = "http://localhost:8081/springfox/api/userActivity";

class AdminUserActivityService {
    getUserActivity(){
        return axios.get(USER_ACTIVITY_API_BASE_URL+'/');
    }

    createUserActivity(user){
        return axios.post(USER_ACTIVITY_API_BASE_URL+'/',user);
    }

    getUserActivityById(userId){
        return axios.get(USER_ACTIVITY_API_BASE_URL+'/'+userId);
    }

    updateUserActivity(user, userId){
        return axios.put(USER_ACTIVITY_API_BASE_URL+'/updateStatus/'+userId,user);
    }

    deleteUserActivity(userId){
        return axios.delete(USER_ACTIVITY_API_BASE_URL+'/'+userId);
    }
}

//exporting EmployeeService object
export default new AdminUserActivityService();