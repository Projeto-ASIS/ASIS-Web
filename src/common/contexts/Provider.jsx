import HighContrastProvider from "./HighContrastProvider";
import UserProvider from "./UserProvider";

export default function Providers({ children }) {
  return (
    <HighContrastProvider>
      <UserProvider>
      {children}
      </UserProvider>
    </HighContrastProvider>
  )
}