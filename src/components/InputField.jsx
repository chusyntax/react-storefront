const InputField = ({
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
}) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`border w-full mb-2 p-2 ${className}`}
  />
);

export default InputField;
