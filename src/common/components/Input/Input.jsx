import PropTypes from "prop-types"

import "./Input.css"
import { useCallback, useState } from "react"

Input.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  hasIcon: PropTypes.bool,
  placeholder: PropTypes.string,
  required: PropTypes.bool
}

export default function Input({ hasIcon = false, placeholder, onChange, required,  ...props }) {
  const [isEmpty, setIsEmpty] = useState(true)

  const handleOnChange = useCallback((e) => {
    const valueOfInput = e.target.value

    setIsEmpty(!valueOfInput)

    if (props.onChange) {
      props.onChange()
    }
  }, [isEmpty, onChange])

  return (
    <div className="input__container">
      <label htmlFor="" className={`input__label input__label--${isEmpty ? "empty" : "not-empty"}`}>
        {placeholder}
        {required ? <span className="input__container__required-icon">*</span> : null}
        </label>
      <input onChange={handleOnChange} className={`input__base ${props.className ?? ""} ${hasIcon ? "input__base--has-icon" : ""} input__base--${isEmpty ? "empty" : "not-empty"}`} type="text" {...props} />
    </div>
  )
}