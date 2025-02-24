import "./Button.css"

import PropTypes from "prop-types"

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  className: PropTypes.string
}

export default function Button({ children, type = "default", className, ...props }) {
  return (
    <button data-button-type={type} className={`${className} button`} {...props} >{children}</button>
  )
}

