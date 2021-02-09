import axios from 'axios'
import QueryString from 'querystring'
import qs from 'qs';
// import Vue from 'vue'
// import ElementUI from 'element-ui'
// Vue.use(ElementUI)
    // 添加请求拦截器
axios.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    // 检测版本是否是最新的
    // if (process.env.NODE_ENV == 'production') {
    //     let xhr = new XMLHttpRequest();
    //     // xhr.open('get', '../static/version.json?_=' + Math.random());
    //     xhr.open('get', 'http://console.browser.qihoo.net/static/version.json?_=' + Math.random());
    //     xhr.send();
    //     xhr.onreadystatechange = () => {
    //         if (xhr.readyState == 4 && xhr.status == 200) {
    //             if (xhr.response) {
    //                 if (process.env.VERSION !== JSON.parse(xhr.response).version) {
    //                     var message = "浏览器后台管理系统版本有更新，点击确认加载最新，或按【CTRL + F5】！"
    //                     Vue.prototype.$alert(message, '系统提示', {
    //                         confirmButtonText: '确定',
    //                         callback: function() {
    //                             window.location.reload(true);
    //                         }
    //                     });
    //                 }
    //             }
    //         };
    //     }
    // }
    config.withCredentials = true;
    return config;
}, function(error) {
    // 对请求错误做些什么
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
    postStr: function(url, str) {

        return axios.post(url,
            str, {
                header: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }
        );
    },
    get: function(url, params) {
        return axios.get(url, params);
    },
    postUpload: function(url, params, config) {
        return axios.post(url,
            params, {
                // headers: config
            }
        );
    }
};
export {
    MyAjax
};