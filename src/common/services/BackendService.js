import * as BackendClient from "./BackendClient"

export async function getUser(){
  try {
    const user = await BackendClient.get("/")
  } catch (error) {
    
  }
}