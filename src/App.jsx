import { RouterProvider } from "react-router-dom"

import { router } from "@/Routes"

export function App() {
  return (
    <>
      {/* <Homepage /> */}
      <RouterProvider router={router} />
    </>
  )
}

