import "./Button.css"

import PropTypes from "prop-types"

ButtonPrimary.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string
}

export default function ButtonPrimary({ children, type = "default" }){
  return (
    <button data-button-type={type} className="button">{children}</button>
  )
}