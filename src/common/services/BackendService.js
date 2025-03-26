import * as BackendClient from "./BackendClient"

export async function setUser(newUser, options = {}){
  try {
    const res = await BackendClient.post("/usuarios/cadastro", newUser, options)

    return 300 > res.status >= 200
  } catch (error) {
    console.error(error) 
    return false
  }
}

export async function getLogin(userData, options = {}){
  try {
    const user = await BackendClient.post("/usuarios/login", userData, options)

    return user
  } catch (error) {
    console.error(error) 
    return null
  }
}