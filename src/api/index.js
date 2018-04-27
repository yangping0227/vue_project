import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';
export let getsliders = function(){
   return axios.get('/sliders');//返回的是一个promise对象
}
// getsliders().then();
export let gethotbook = function(){
    return axios.get('/hot');
}
