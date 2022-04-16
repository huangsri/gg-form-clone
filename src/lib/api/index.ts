import axios, { AxiosRequestConfig } from 'axios'

export function fetchAPI<T = any>(options: AxiosRequestConfig) {
  return axios.request<T>(options)
}
