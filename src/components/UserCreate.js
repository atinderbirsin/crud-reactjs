import { useState } from "react";
import create from "../api/api";
import Input from "./Input";

function UserCreate() {
  const [user, setUser] = useState({});

  function onInputChange(value) {
    setUser({ ...user, ...value });
  }

  async function onFormSubmit(e) {
    e.preventDefault();

    const data = await create("http://www.atinder.in:3001/user/create", user);

    console.log(data);
  }

  return (
    <div>
      <form className="grid grid-cols-2 p-6 gap-3" onSubmit={onFormSubmit} >
        <Input name="fullName" onChange={onInputChange} />
        <Input name="address" onChange={onInputChange} />
        <Input type="tel" name="mobileNumber" onChange={onInputChange} />
        <Input type="email" name="email" onChange={onInputChange} />
        <Input type="password" name="password" onChange={onInputChange} />
        {/* <Input type="file" name="image" onChange={onInputChange} /> */}
        <button type="submit" className="hidden">submit</button>
      </form>
    </div>
  );
}

export default UserCreate;
