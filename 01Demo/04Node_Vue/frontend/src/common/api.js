import { MyAjax } from './ajax'

// const exec_url = 'http://127.0.0.1:9000'
const exec_url = '/api/'

export const getProductList = params => {
  return MyAjax.get(exec_url + '/product/info', { params: Object.assign({}, params) })
}

