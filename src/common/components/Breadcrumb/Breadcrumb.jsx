import PropTypes from "prop-types"
import "./Breadcrumb.css"

BreadcrumbRoot.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  props: PropTypes.symbol
}

function BreadcrumbRoot({ className, children, ...props }) {
  return (
    <span className={`breadcrumb__base ${className}`} {...props}>
      {children}
    </span>
  )
}

BreadcrumbPath.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  props: PropTypes.symbol,
  isActive: PropTypes.bool
}
function BreadcrumbPath({ children, className, isActive = false, ...props }) {
  return (
    <span className={`breadcrumb__path bread__path--${isActive ? "active" : "not-active"} ${className}`} {...props}>{children}</span>
  )
}

const Breadcrumb = {
  Root: BreadcrumbRoot,
  Path: BreadcrumbPath
}

export default Breadcrumb