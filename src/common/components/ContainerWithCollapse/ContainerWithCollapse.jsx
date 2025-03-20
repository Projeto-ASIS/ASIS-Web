import PropTypes from "prop-types"
import { createContext, useContext, useState } from "react"

import "./ContainerWithCollapse.css"

ContainerWithCollapseRoot.propTypes = {
  className: PropTypes.string,
  opened: PropTypes.bool,
  children: PropTypes.node,
  props: PropTypes.symbol
}

const IsCollapsedContext = createContext(null)
const ToggleIsCollapsedContext = createContext(null)

function ContainerWithCollapseRoot({ className, children, opened = false, ...props }) {
  const [isCollapsed, setIsCollapsed] = useState(opened)

  const toggleCollapsed = () => setIsCollapsed(prev => !prev)


  return (
    <IsCollapsedContext.Provider value={isCollapsed}>
      <ToggleIsCollapsedContext.Provider value={toggleCollapsed}>
        <div className={`data ${className}`} {...props}>
          {children}
        </div>
      </ToggleIsCollapsedContext.Provider>
    </IsCollapsedContext.Provider>
  )
}

ContainerWithCollapseContent.propTypes = {
  children: PropTypes.node,
  props: PropTypes.symbol
}

function ContainerWithCollapseContent({ children, ...props }) {
  const isCollapsed = useContext(IsCollapsedContext)

  return (
    <div className="data__content" aria-expanded={isCollapsed} {...props}>
      {children}
    </div>
  )
}

ContainerWithCollapsedExpander.propTypes = {
  className: PropTypes.string,
  props: PropTypes.symbol,
  children: PropTypes.node,
}

function ContainerWithCollapsedExpander({ className, children, ...props }) {
  const isCollapsed = useContext(IsCollapsedContext)
  const toggleIsCollapsed = useContext(ToggleIsCollapsedContext)

  return (
    <button className={`data__field ${className}`} onClick={toggleIsCollapsed} {...props}>
      <span className="data__field__innerText">{children}</span>
      <span className="data__field__icon">{isCollapsed ? '−' : '+'}</span>
    </button>
  )
}

const ContainerWithCollapse = {
  Root: ContainerWithCollapseRoot, 
  Content: ContainerWithCollapseContent,
  Expander: ContainerWithCollapsedExpander
}

export default ContainerWithCollapse