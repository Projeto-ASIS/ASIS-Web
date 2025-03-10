import PropTypes from "prop-types"

import "./Input.css"
import { useCallback, useState } from "react"

Input.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  hasIcon: PropTypes.bool

}

export default function Input({ hasIcon = false, onChange,  ...props }) {
  const [isEmpty, setIsEmpty] = useState(true)

  const handleOnChange = useCallback((e) => {
    const valueOfInput = e.target.value

    setIsEmpty(!valueOfInput)

    if (props.onChange) {
      props.onChange()
    }
  }, [isEmpty, onChange])

  return (
    <input onChange={handleOnChange} className={`input__base ${props.className ?? ""} ${hasIcon ? "input__base--has-icon" : ""} input__base--${isEmpty ? "empty" : "not-empty"}`} type="text" {...props} />
  )
}

// export function Icon() {
//   return (
    
//   )
// }