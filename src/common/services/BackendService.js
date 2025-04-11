import { jwtDecode } from "jwt-decode"
import * as BackendClient from "./BackendClient"
import getUserToken from "../utils/getUserToken"

export async function setUser(newUser, options = {}) {
  try {
    const res = await BackendClient.post("/usuarios/cadastro", newUser, options)

    return 300 > res.status >= 200
  } catch (error) {
    console.error(error)
    return false
  }
}

export async function getLogin(userData, options = {}) {
  try {
    const user = await BackendClient.post("/usuarios/login", userData, options)

    return user
  } catch (error) {
    console.error(error)
    return null
  }
}

export async function getLoginByToken(idDecoded) {
  try {
    const user = await BackendClient.get(`/usuarios/${idDecoded}`, { "Authorization": `Bearer ${idDecoded}` })

    return user
  } catch (error) {
    console.error(error)
    return null
  }
}

export async function setAppointment(idUser, data) {
  try {
    if (!userId) throw new Error("O usuário não está logado.")

    await BackendClient.post(`/agendamentos/registrar/${idUser}`, data)

    return true
  } catch (error) {
    console.error(error)
    return false
  }
}

export async function getServices(token){
  try {
    const services = await BackendClient.get("/servicos", {headers: {"Authorization": `Bearer ${token}`}})

    return services
  } catch (error) {
    return  null
  }
}

export async function getServiceUnits(token){
  try {
    const servicesUnits = await BackendClient.get("/servicos", {headers: {"Authorization": `Bearer ${token}`}})

    return servicesUnits
  } catch (error) {
    return  null
  }
}

export async function getEmployeeAppointments(dateAppointment, unitId){
  try {
    const token = getUserToken()
    console.log()

    const res = await BackendClient.get(`/agendamentos?dataAtendimento=${dateAppointment}&unidadeId=${unitId}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    

    return res.data
  } catch (error) {
    console.error(error) 
    return null
  }
}