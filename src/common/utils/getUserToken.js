export default function getUserToken(){
  const token = localStorage.getItem("user-package")

  if(!token) return null

  return token
  
}