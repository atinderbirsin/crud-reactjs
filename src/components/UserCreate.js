import { useState } from "react";
import Input from "./Input";

function UserCreate({ onSubmit }) {
  const [user, setUser] = useState({});

  function onInputChange(value) {
    setUser({ ...user, ...value });
  }

  function onFormSubmit(e) {
    e.preventDefault();

    onSubmit(user);
  }

  return (
    <div className="bg-green-500 p-6">
      <h1 className="text-white text-2xl font-bold mb-3">Create User</h1>

      <form className="grid grid-cols-2 gap-3" onSubmit={onFormSubmit} >
        <Input label='Full Name' name="fullName" onChange={onInputChange} />
        <Input label='Address' name="address" onChange={onInputChange} />
        <Input label='Mobile Number' type="tel" name="mobileNumber" onChange={onInputChange} />
        <Input label='Email' type="email" name="email" onChange={onInputChange} />
        <Input label='Password' type="password" name="password" onChange={onInputChange} />
        {/* <Input type="file" name="image" onChange={onInputChange} /> */}
        <button type="submit" className="hidden">submit</button>
      </form>
    </div>
  );
}

export default UserCreate;
