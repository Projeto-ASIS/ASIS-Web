import { useCallback, useState } from "react";

export default function useForm(config) {
  const { initialFormData, customErrors } = config

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = useCallback(
    (e) => {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    },
    [formData]
  );

  const resetFormData = useCallback(() => setFormData(initialFormData), [initialFormData]);

  const formIsValid = useCallback(() => {
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      const value = formData[key];
      const validators = customErrors[key];

      if (Array.isArray(validators)) {
        for (const validate of validators) {
          console.log("validate", typeof validate)

          const errorMessage = validate(value);
          console.log("errorMessage", errorMessage)
          if (errorMessage) {
            newErrors[key] = newErrors[key]
              ? `${newErrors[key]}; ${errorMessage}`
              : errorMessage;
          }
        }
      } else if (!value) {
        newErrors[key] = "Campo Obrigatório";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, customErrors]);

  return {
    formData,
    errors,
    handleChange,
    formIsValid,
    setFormData,
    resetFormData,
  };
}