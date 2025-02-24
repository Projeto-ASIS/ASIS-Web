import "./Button.css"

import PropTypes from "prop-types"

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string
}

export default function Button({ children, type = "default", onClick }){
  return (
    <button data-button-type={type}  className="button" onClick={onClick}>{children}</button>
  )
}
