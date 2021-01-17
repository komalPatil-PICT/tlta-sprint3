import axios from 'axios';

const ASSESSMENT_API_BASE_URL = "http://localhost:8081/springfox/api/assessments";

class AdminAssessmentService {
    getAssessment(){
        return axios.get(ASSESSMENT_API_BASE_URL+'/');
    }

    createAssessment(assessment){
        return axios.post(ASSESSMENT_API_BASE_URL+'/',assessment);
    }

    getAssessmentById(assessmentId){
        return axios.get(ASSESSMENT_API_BASE_URL+'/'+assessmentId);
    }

    updateAssessment(assessment, assessmentId){
        return axios.put(ASSESSMENT_API_BASE_URL+'/'+assessmentId,assessment);
    }

    deleteAssessment(assessmentId){
        return axios.delete(ASSESSMENT_API_BASE_URL+'/'+assessmentId);
    }
}
//exporting EmployeeService object
export default new AdminAssessmentService();