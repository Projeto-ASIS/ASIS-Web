import "./SideBarEmployee.css"
import { Home, PanelTopClose, PanelTopOpen } from "lucide-react"
import logoSvgPath from "@/assets/Logo.svg"
import { FolderPlus, Files, FileText, Users } from "lucide-react"
import { Link } from "react-router-dom"
const SideBarEmployee = ({ isExpanded, setIsExpanded }) => {
  const menuItems = [
    { icon: <Home size={36} />, label: "Home",tab:"InitialTab" },
    { icon: <FileText size={36} />, label: "Registros" },
    { icon: <Files size={36} />, label: "Agendamentos",tab:"AppoinmentsTab" },
    { icon: <Users size={36} />, label: "Familias" },
  ]

  return (
    <>
      {/* Sidebar de desktop */}
      <div className={`sidebar ${isExpanded ? "expanded" : ""}`}>
        <div className="brand">
          <Link to="/employee"><img src={logoSvgPath} alt="Logo" className="logo__sidebar" /> </Link>
        </div>
        <button
          className="toggle-button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <div className="menu">
              <PanelTopClose size={45} className="close-icon " />
            </div>
          ) : (
            <div className="menu">
              <PanelTopOpen size={45} className="open-icon" />
            </div>
          )}
        </button>
        <div className="sidebar-content">
          {menuItems.map((item, index) => (
            <div className="sidebar-item" key={index}>
              <Link className="links__sidebar" to={`/employee/${item.tab}`}>
              <span className="icon">{item.icon}</span>
              <span className="label">{item.label}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Navbar inferior no mobile */}
      <div className="mobile-navbar">
        {menuItems.map((item, index) => (
          <div className="nav-item" key={index}>
            <Link className="links" to={`/employee/${item.tab}`}>
              <span className="icon">{item.icon}</span>
              <span className="label">{item.label}</span>
              </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default SideBarEmployee
