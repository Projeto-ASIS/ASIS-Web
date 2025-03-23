import { createContext, useReducer, useEffect, useState, useContext } from "react"


const HighContrastContext = createContext()
const SetHighContrastContext = createContext()

function reducer(state, action){
  if(action.type === "toggle"){
    return !state
  }

  if(action.type === "setter"){
    return {
      ...state,
      ...action
    }
  }

  throw Error("Input inválido do \"type\" para alto contraste")
}

export default function HighContrastProvider({ children }) {
  const initialColorPreference = localStorage.getItem("user-high-contrast")
  // const [contrastPreference, setContrastPreference] = useState(initialColorPreference)
  const [contrastPreference, colorDispatcher] = useReducer(reducer, )

  useEffect(() => {
    const isHighContrast = Boolean(document.body.dataset.highContrast)

    localStorage.setItem("user-high-contrast", isHighContrast)

    const body = document.body
    body.dataset.highContrast = Boolean(contrastPreference)

  }, [contrastPreference])

  return (
    <HighContrastContext.Provider value={contrastPreference}>
      <SetHighContrastContext.Provider value={colorDispatcher}>
        {children}
      </SetHighContrastContext.Provider>
    </HighContrastContext.Provider>
  )
}

export function useUserPreferences(){
  return useContext(HighContrastContext)
}

export function usePreferencesDispatcher(){
  return useContext(SetHighContrastContext)
}