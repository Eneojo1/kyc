const SelectInput = ({
  name,
  value,
  onChange,
  options,
  placeholder = "Select...",
  required = false,
  className = "",
}) => {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className={`${className} ${
        value ? "text-gray-800" : "text-gray-400 border-gray-600"
      }`}
    >
      {/* Placeholder */}
      <option value="" disabled className="text-gray-300">
        {placeholder}
      </option>

      {/* Dynamic options */}
      {options.map(({ value, label }) => (
        <option key={value} value={value} className="text-gray-800">
          {label}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
