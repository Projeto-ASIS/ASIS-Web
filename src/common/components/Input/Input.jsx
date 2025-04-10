import PropTypes from "prop-types";
import { useCallback, useState, forwardRef, useRef } from "react";

import "./Input.css";

const Input = forwardRef(({ hasIcon = false, icon: Icon, placeholder, onChange, required, errors, ...props }, ref) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const inputRef = useRef()
  const [isVisible, setIsVisible] = useState(true)

  const handleOnIconClick = useCallback(() => {
    setIsVisible(state => !state)
  }, [isVisible])

  const handleOnChange = useCallback((e) => {
    const valueOfInput = e.target.value;
    setIsEmpty(!valueOfInput);

    if (onChange) {
      onChange(e);
    }
  }, [onChange]);

  // const errorMessage = errors[props.id] ?? ""
  const errorMessage = true

  return (
    <div
      data-error-status={!!errors}
      data-error-message={errorMessage}
      className="input__container"
    >
      <label htmlFor="" className={`input__label input__label--${isEmpty ? "empty" : "not-empty"}`}>
        {placeholder}
        {required ? <span className="input__container__required-icon">*</span> : null}
      </label>
      <input
        ref={ref || inputRef}
        onChange={handleOnChange}
        className={`input__base ${props.className ?? ""} ${hasIcon ? "input__base--has-icon" : ""} input__base--${isEmpty ? "empty" : "not-empty"}`}
        {...props}
        type={isVisible ? "text" : "password"}
      />
      {hasIcon && Icon ? <Icon onClick={handleOnIconClick} className="input__icon" /> : null}
    </div>
  );
});

Input.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  hasIcon: PropTypes.bool,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  icon: PropTypes.elementType
};

export default Input;
