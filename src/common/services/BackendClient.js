import axios from "axios"

const THIRTY_MINUTE_IN_MS = 30 * 1000

const backendClient = axios.create({
  baseURL: "https://localhost:8080",
  timeout: THIRTY_MINUTE_IN_MS,
  responseType: "json"
})

export async function get(url, options){
  return await backendClient.get(url, options)
}

export async function post(url, data, options){
  return await backendClient.post(url, data, options)
}