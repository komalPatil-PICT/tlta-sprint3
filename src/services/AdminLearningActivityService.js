import axios from 'axios';

const ACTIVITY_API_BASE_URL = "http://localhost:8081/springfox/api/learningActivity";

class ActivityService {
    getActivities(){
        return axios.get(ACTIVITY_API_BASE_URL+'/');
    }

    createActivity(activity){
        return axios.post(ACTIVITY_API_BASE_URL+'/',activity);
    }

    getActivityById(activityId){
        return axios.get(ACTIVITY_API_BASE_URL+'/'+activityId);
    }

    updateActivity(activity, activityId){
        return axios.put(ACTIVITY_API_BASE_URL+'/'+activityId,activity);
    }

    deleteActivity(activityId){
        return axios.delete(ACTIVITY_API_BASE_URL+'/'+activityId);
    }
}

//exporting EmployeeService object
export default new ActivityService();