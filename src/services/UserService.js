import axios from 'axios';
 
const USER_ACTIVITY_API_BASE_URL = "http://localhost:8080/springfox/api/learningActivity";
const MY_PROFILE_API_BASE_URL="http://localhost:8080/springfox/api/users";
class UserService{

    getActivities(){
        return axios.get(USER_ACTIVITY_API_BASE_URL+'/');
    }

    getRegisterUserById(id){
        return axios.get(MY_PROFILE_API_BASE_URL+'/'+id);
    }

    getActivityById(activityId){
        return axios.get(USER_ACTIVITY_API_BASE_URL+'/'+activityId);
    }

    updateActivity(activity, activityId){
        return axios.put(USER_ACTIVITY_API_BASE_URL+'/'+activityId,activity);
    }

    deleteActivity(activityId){
        return axios.delete(USER_ACTIVITY_API_BASE_URL+'/'+activityId);
    }

    // getLearningActivtyById(userId){
    //     return axios.get(USER_ACTIVITY_API_BASE_URL+'/'+userId);
    // }

    // addUserLearningActivity(user){
    //     return axios.get(USER_ACTIVITY_API_BASE_URL+'/'+user);
    // }
}

export default new UserService();