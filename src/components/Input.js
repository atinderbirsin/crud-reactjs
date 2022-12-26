import { useState } from "react";

function Input({ name, type = "text", onChange }) {
  const className = "w-60 p-2 rounded-sm";

  const [value, setValue] = useState("");

  function onInputChange(e) {
    onChange({ [name]: e.target.value });
    setValue(e.target.value);
  }

  return (
    <div className="flex flex-col">
      <label>{name}</label>
      <input
        type={type}
        name={name}
        className={className}
        onChange={onInputChange}
        value={value}
      />
    </div>
  );
}

export default Input;
