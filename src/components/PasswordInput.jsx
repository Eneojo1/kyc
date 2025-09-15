import { Check, Eye, EyeOff, X } from "lucide-react";
import { useState } from "react";

const PasswordInput = ({
  value,
  onChange,
  name = "password",
  placeholder = "Password",
  matchWith = null, // optional: pass another field to validate match
  className = "",
}) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow((prev) => !prev);

  const pwMatch = matchWith !== null ? value === matchWith : true;

  return (
    <div className="w-full">
      <div className="relative w-full">
        <input
          type={show ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          className={`${className} p-3 border rounded-lg focus:ring-2 pr-16
            ${
              matchWith !== null && value.length > 0
                ? pwMatch
                  ? "border-green-500 focus:ring-green-500"
                  : "border-red-500 focus:ring-red-500"
                : "focus:ring-blue-500"
            }`}
          value={value}
          onChange={onChange}
        />

        {/* Eye Toggle Button */}
        <span
          onClick={toggleShow}
          className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 cursor-pointer"
        >
          {/* Feedback icon inline with Eye */}
          {matchWith !== null &&
            value.length > 0 &&
            (pwMatch ? (
              <Check size={18} className="text-green-500" />
            ) : (
              <X size={18} className="text-red-500" />
            ))}
          {show ? (
            <EyeOff size={20} className="text-gray-600" />
          ) : (
            <Eye size={20} className="text-gray-600" />
          )}
        </span>
      </div>
    </div>
  );
};

export default PasswordInput;
