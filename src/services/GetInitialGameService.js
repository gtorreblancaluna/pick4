import axios from 'axios';

const RESOURCE_NAME = '/api/consumer';


export default {
    delete(id) {
        return axios.delete(`${URL_REST + RESOURCE_NAME}/${id}`);
    },
    getInitialGame(data){
        let config = {
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }

        return axios
            .post(`${RESOURCE_NAME}/getInitialGame`, data,config)
            .then(response => {
                return response
            })
    }

};
