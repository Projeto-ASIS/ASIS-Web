import PropTypes from "prop-types"
import "./BreadCrumb.css"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

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
  isActive: PropTypes.bool,
  path: PropTypes.string.isRequired
}

function BreadcrumbPath({ children, path, className, isActive = false, ...props }) {
  const navigate = useNavigate()

  const handleOnClick = useCallback(() => {
    navigate(path)
  }, [path])

  return (
    <>
      <span onClick={handleOnClick} className={`breadcrumb__path breadcrumb__path--${isActive ? "active" : "not-active"} ${className}`} {...props}>{children}</span>
      {!isActive && <span className={`breadcrumb__path--underline`}>/</span>}
    </>
  )
}

const Breadcrumb = {
  Root: BreadcrumbRoot,
  Path: BreadcrumbPath
}

export default Breadcrumb