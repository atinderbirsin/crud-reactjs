import { useEffect } from "react";
import useUserHook from "../hooks/use-user-hook";
import User from "./User";

function UserList() {
    const { users, getUsers } = useUserHook();

    useEffect(() => {
        getUsers();
    }, [getUsers])

  const renderedList = users.map((user, index) => {
    // return <User user={user} key={index} onDelete={onDelete} onUpdate={onUpdate}/>;
    return <User user={user} key={user._id} />
  });

  return (
    <div className="bg-blue-500 p-6 grid grid-cols-[repeat(auto-fill,140px)] gap-6">{renderedList}</div>
  );
}

export default UserList;
