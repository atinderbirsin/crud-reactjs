import { useState } from "react";
import Input from "./Input";

function User({ user, onDelete, onUpdate }) {
  const className = `border border-2 border-white text-white h-44 rounded-md flex flex-col items-center`;

  const [isClicked, setIsClicked] = useState(false);
  const [userInfo, setUserInfo] = useState({ ...user });

  function onInputChange(value) {
    setUserInfo({ ...userInfo,...value })
  }

  function onFormSubmit(e) {
    e.preventDefault();

    onUpdate(userInfo);
    setIsClicked(!isClicked);
  }

  return (
    <div className="relative">
      <div className={className}>
        <div className="h-full self-end">
          <div className="flex items-center justify-center gap-2 p-2 cursor-pointer">
            <i
              className="fa fa-pencil"
              onClick={() => setIsClicked(!isClicked)}
            ></i>
            <i
              className="fa fa-minus-circle"
              onClick={() => onDelete(user._id)}
            ></i>
          </div>
        </div>

        <div className="h-full">
          <h2>{user.fullName}</h2>
        </div>
      </div>
      <div
        className={`w-full z-40 bg-slate-500 absolute ${
          !isClicked ? "hidden" : ""
        }`}
      >
        <form className="grid grid-cols-1 gap-1 w-full" onSubmit={onFormSubmit}>
          <Input label="Full Name" name="fullName" value={userInfo.fullName} onChange={onInputChange}/>
          <Input label="Address" name="address" value={userInfo.address} onChange={onInputChange}/>
          <Input
            label="Mobile Number"
            type="tel"
            name="mobileNumber"
            value={userInfo.mobileNumber}
            onChange={onInputChange}
          />
          <Input
            label="Email"
            type="email"
            name="email"
            value={userInfo.email}
            onChange={onInputChange}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            value={userInfo.password}
            onChange={onInputChange}
          />
          {/* <Input type="file" name="image" onChange={onInputChange} /> */}
          <button type="submit" className="hidden">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default User;
