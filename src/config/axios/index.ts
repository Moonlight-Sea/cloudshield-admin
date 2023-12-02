import { service } from './service'

import { config } from './config'

const { default_headers } = config


const request = (option: any) => {
  const { url, method, params, data, headersType, responseType, ...config } = option
  return service({
    url: url,
    method,
    params,
    data,
    ...config,
    responseType: responseType,
    headers: {
      'Content-Type': headersType || default_headers
    }
  })
}

export default {
  get(url: string, params?: any, config?: any) {
    return request({
      url,
      method: 'get',
      params,
     ...config
    })
  },
  post(url: string, data?: any, config?: any) {
    return request({
      url,
      method: 'post',
      data,
     ...config
    })
  },
  put(url: string, data?: any, config?: any) {
    return request({
      url,
      method: 'put',
      data,
    ...config
    })
  },
  delete(url: string, data?: any, config?: any) {
    return request({
      url,
      method: 'delete',
      data,
   ...config
    })
  },
  upload(url: string, data?: any, config?: any) {
    return request({
      url,
      method: 'post',
      data,
      headersType:'multipart/form-data',
   ...config
    })
  },
  download(url: string, data?: any, config?: any) {
    return request({
      url,
      method: 'get',
      data,
      responseType: 'blob',
  ...config
    })
  }
}
