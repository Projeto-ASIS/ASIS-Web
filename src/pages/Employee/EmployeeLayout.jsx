import SideBarEmployee from "@/common/components/SideBarEmployee/SideBarEmployee"
import React from "react"

import "./EmployeeLayout.css"

import { Outlet } from "react-router-dom"
import EmployeeProtectedRoute from "@/common/components/EmployeeProtectedRoute"



export default function EmployeeLayout() {
  const [isExpanded, setIsExpanded] = React.useState(false)

  return (
    <EmployeeProtectedRoute>
      <div className={`app ${isExpanded ? "sidebar-expanded" : ""}`}>
        <SideBarEmployee
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
        />
        <div className="main-content">
        <Outlet />
        </div>
      </div>S
    </EmployeeProtectedRoute>
  )
}
