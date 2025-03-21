import { createContext, useEffect, useState } from "react"

const HighContrastContext = createContext()
const SetHighContrastContext = createContext()

const EContrastValues = {
  DARK: "dark",
  LIGHT: "light"
}

export default function HighContrastProvider({ children }) {
  const initialColorPreference = localStorage.getItem("user-high-contrast")
  const [contrastPreference, setContrastPreference] = useState(initialColorPreference)

  useEffect(() => {
    const isHighContrast = Boolean(document.body.dataset.highContrast)

    localStorage.setItem("user-high-contrast", isHighContrast)

    const body = document.body
    body.dataset.highContrast = contrastPreference

  }, [contrastPreference])

  return (
    <HighContrastContext.Provider value={contrastPreference}>
      <SetHighContrastContext.Provider value={setContrastPreference}>
        {children}
      </SetHighContrastContext.Provider>
    </HighContrastContext.Provider>
  )
}