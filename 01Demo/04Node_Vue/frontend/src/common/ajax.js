import axios from 'axios'
import QueryString from 'querystring'

axios.interceptors.request.use(function(config) {
    // 请求拦截
    config.withCredentials = true;
    return config;
}, function(error) {
    // 响应拦截
    return Promise.reject(error);
});


let MyAjax = {
    post: function(url, params) {
        return axios.post(url,
            QueryString.stringify(params), {
                header: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }
        );
    },
    get: function(url, params) {
        return axios.get(url, params);
    },
};
export {
    MyAjax
};