import HighContrastProvider from "./HighContrastProvider";

export default function Providers({ children }) {
  return (
    <HighContrastProvider>
      {children}
    </HighContrastProvider>
  )
}