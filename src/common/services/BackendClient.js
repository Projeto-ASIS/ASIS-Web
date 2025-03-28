import axios from "axios"

const THIRTY_SECONDS_IN_MS = 30 * 1000

const backendClient = axios.create({
  baseURL: "http://localhost:8080",
  timeout: THIRTY_SECONDS_IN_MS,
  responseType: "json"
})

backendClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("user-package")

  if(token){
    config.headers['Authorization'] = `${token}`
    config.headers['Access-Control-Allow-Origin'] = '*'
  }

  return config
})

export async function get(url, options){
  return await backendClient.get(url, options)
}

export async function post(url, data, options){
  return await backendClient.post(url, data, options)
}