import axios, {
    AxiosInstance,
  } from 'axios'
  
import { config } from '@/config/axios/config'
  
  
const { base_url, request_timeout } = config


// 创建axios实例
const service: AxiosInstance = axios.create({
  baseURL: base_url, // api 的 base_url
  timeout: request_timeout, // 请求超时时间
  withCredentials: false // 禁用 Cookie 等信息
})

export { service }
