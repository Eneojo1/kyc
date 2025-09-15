import { Circle } from "lucide-react";
import { useState } from "react";

const CustomRadio = ({ options = [], setter }) => {
  const [selected, setSelected] = useState("all");

  const defaultOption = { label: "All", value: "all" };
  const allOptions = [defaultOption, ...options];

  const handleSelect = (e) => {
    if (setter) setter(e);
    setSelected(e);
  };
  return (
    <div className="flex gap-4">
      {allOptions?.map((o, i) => (
        <div
          key={i}
          className="flex items-center gap-1"
          onClick={() => handleSelect(o.value)}
        >
          {o.label}{" "}
          <Circle
            fill={`${selected === o.value ? "#15af8d" : "#fff"}`}
            className="w-[1em] h-[1em]"
          />
        </div>
      ))}
    </div>
  );
};

export default CustomRadio;
