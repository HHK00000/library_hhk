import {
  MyAjax
} from '../common/js/ajax'

let base_port = 9000;
let base_url = `http://127.0.0.1:${base_port}`;

export const getProducts = params => {
  return MyAjax.get(base_url + '/product/info', {
    params: params
  });
};
