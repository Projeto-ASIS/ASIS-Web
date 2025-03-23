import * as BackendClient from "./BackendClient"

export async function getUser(user){
  try {
    const user = await BackendClient.get("/")
  } catch (error) {
    
  }
}

export async function getLogin(userData, options = {}){
  try {
    const user = await BackendClient.post("/usuarios/login", userData, options)

    return user
  } catch (error) {
    
  }
}