import PropTypes from "prop-types";
import { useCallback, useRef, useState, forwardRef } from "react";
import "./Input.css";

const Input = forwardRef(({ hasIcon = false, icon: Icon, placeholder, onChange, required, ...props }, ref) => {
  const inputRef = useRef(null);
  const [isEmpty, setIsEmpty] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleOnChange = useCallback((e) => {
    const valueOfInput = e.target.value;
    setIsEmpty(!valueOfInput);

    if (onChange) {
      onChange(e);
    }
  }, [onChange]);

  return (
    <div data-input-error={isError} className="input__container">
      <label htmlFor="" className={`input__label input__label--${isEmpty ? "empty" : "not-empty"}`}>
        {placeholder}
        {required ? <span className="input__container__required-icon">*</span> : null}
      </label>
      <input
        ref={ref || inputRef}
        onChange={handleOnChange}
        className={`input__base ${props.className ?? ""} ${hasIcon ? "input__base--has-icon" : ""} input__base--${isEmpty ? "empty" : "not-empty"}`}
        type="text"
        {...props}
      />
      {hasIcon && Icon ? <Icon className="input__icon" /> : null}
    </div>
  );
});

Input.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  hasIcon: PropTypes.bool,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  icon: PropTypes.node
};

export default Input;
