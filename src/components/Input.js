import { useState } from "react";

function Input({ label, name, type = "text", onChange, value }) {
  const className = "w-60 p-2 rounded-sm";

  const [val, setVal] = useState("");

  function onInputChange(e) {
    onChange({ [name]: e.target.value });
    setVal(e.target.value);
  }

  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        className={className}
        onChange={onInputChange}
        value={val || value}
      />
    </div>
  );
}

export default Input;
