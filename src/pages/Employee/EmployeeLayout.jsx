import SideBarEmployee from "@/common/components/SideBarEmployee/SideBarEmployee"
import React from "react"
import Breadcrumb from "@/common/components/Breadcrumb/Breadcrumb"
import "./EmployeeLayout.css"
import AppoinmentsTab from "./AppoinmentsTab/AppoinmentsTab"
import { Outlet } from "react-router-dom"
export default function EmployeeLayout() {
  const [isExpanded, setIsExpanded] = React.useState(false)
  return (
    <>
      <div className={`app ${isExpanded ? "sidebar-expanded" : ""}`}>
        <SideBarEmployee
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
        />
        <div className="main-content">
          <div className="breadcrumb-top">
            <Breadcrumb.Root className="about-cadunico__breadcrumb">
              <Breadcrumb.Path path="/home">Usuario</Breadcrumb.Path>
              <Breadcrumb.Path path="/user">Serviços</Breadcrumb.Path>
              <Breadcrumb.Path path="/services/cadunico/about" isActive>
                Cadúnico
              </Breadcrumb.Path>
            </Breadcrumb.Root>
          </div>
        <Outlet />
        </div>
      </div>S
    </>
  )
}
