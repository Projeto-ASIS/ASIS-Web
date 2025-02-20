import "./Button.css"

import PropTypes from "prop-types"

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string
}

export default function Button({ children, type = "default" }){
  return (
    <button data-button-type={type} className="button">{children}</button>
  )
}