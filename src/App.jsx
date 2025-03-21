import Providers from "@/common/contexts/Provider"
import { RouterProvider } from "react-router-dom"

import { router } from "@/Routes"

export function App() {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  )
}

