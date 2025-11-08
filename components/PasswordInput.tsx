"use client";

import { Check, Eye, EyeOff, X } from "lucide-react";
import { useState, ChangeEvent } from "react";

interface Props {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  placeholder?: string;
  matchWith?: string | null;
  className?: string;
}

const PasswordInput = ({
  value,
  onChange,
  name = "password",
  placeholder = "Password",
  matchWith = null,
  className = "",
}: Props) => {
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
          value={value}
          onChange={onChange}
          className={`p-3 border rounded-lg focus:ring-2 pr-16 w-full transition-all duration-200 ${className} ${
            matchWith !== null && value.length > 0
              ? pwMatch
                ? "border-green-500 focus:ring-green-500"
                : "border-red-500 focus:ring-red-500"
              : "focus:ring-blue-500"
          }`}
        />

        {/* Eye Toggle Button */}
        <span
          onClick={toggleShow}
          className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 cursor-pointer select-none"
        >
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
