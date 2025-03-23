import "./SideBarEmployee.css"
import { PanelTopClose, PanelTopOpen } from "lucide-react"
import logoSvgPath from "@/assets/Logo.svg"
import { FolderPlus, Files, FileText, Users } from "lucide-react"
const SideBarEmployee = ({ isExpanded, setIsExpanded }) => {
  const menuItems = [
    { icon: <FolderPlus size={36} />, label: "Criar diagnóstico" },
    { icon: <FileText size={36} />, label: "Registros" },
    { icon: <Files size={36} />, label: "Agendamentos" },
    { icon: <Users size={36} />, label: "Familias" },
  ]

  return (
    <>
      {/* Sidebar de desktop */}
      <div className={`sidebar ${isExpanded ? "expanded" : ""}`}>
        <div className="brand">
          <img src={logoSvgPath} alt="Logo" className="logo" />
        </div>
        <button
          className="toggle-button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <div className="menu">
              <PanelTopClose size={45} className="close " />
            </div>
          ) : (
            <div className="menu">
              <PanelTopOpen size={45} className="open" />
            </div>
          )}
        </button>
        <div className="sidebar-content">
          {menuItems.map((item, index) => (
            <div className="sidebar-item" key={index}>
              <span className="icon">{item.icon}</span>
              <span className="label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Navbar inferior no mobile */}
      <div className="mobile-navbar">
        {menuItems.map((item, index) => (
          <div className="nav-item" key={index}>
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
          </div>
        ))}
      </div>
    </>
  )
}

export default SideBarEmployee
