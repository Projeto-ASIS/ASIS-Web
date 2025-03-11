import PropTypes from "prop-types"

import "./Input.css"
import { useCallback, useRef, useState } from "react"

Input.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  hasIcon: PropTypes.bool,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  icon: PropTypes.node

}

export default function Input({ hasIcon = false, icon: Icon, placeholder, onChange, required, ...props }) {
  const inputRef = useRef(null)
  const [isEmpty, setIsEmpty] = useState(true)
  const [isError, setIsError] = useState(false)

  const handleOnInputError = useCallback((formEvent) => {
    formEvent.taget
    setIsError()

  },[])

  const handleOnChange = useCallback((e) => {
    const valueOfInput = e.target.value

    setIsEmpty(!valueOfInput)

    if (props.onChange) {
      props.onChange()
    }
  }, [isEmpty, onChange])



  return (
    <div data-input-error={isError} className="input__container">
      <label htmlFor="" className={`input__label input__label--${isEmpty ? "empty" : "not-empty"}`}>
        {placeholder}
        {required ? <span className="input__container__required-icon">*</span> : null}
      </label>
      <input ref={inputRef} onChange={handleOnChange} className={`input__base ${props.className ?? ""} ${hasIcon ? "input__base--has-icon" : ""} input__base--${isEmpty ? "empty" : "not-empty"}`} type="text" {...props} />
      {hasIcon && Icon ? <Icon className="input__icon" /> : null}
    </div>
  )
}