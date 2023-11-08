import React from "react";
const InputBox = ({
  onChange,
  label,
  variant,
  value,
  placeholder,
  type,
  className,
  name,
}) => {
  return (
    <input
      onChange={onChange}
      label={label}
      type={type}
      name={name}
      className={className}
      variant={variant}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default InputBox;
