import UserCreate from "./components/UserCreate";
import UserList from "./components/UserList";
import api from "./api/api.js";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  async function onFormSubmit(user) {
    const response = await api.create(
      `${process.env.REACT_APP_BASE_URL}create`,
      user
    );

    if (response.status === 1) {
      setUsers([...users, response.data]);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const response = await api.list(`${process.env.REACT_APP_BASE_URL}list`);

    setUsers(response.result);
  }

  async function deleteUser(id) {
    const response = await api.remove(
      `${process.env.REACT_APP_BASE_URL}delete`,
      id
    );

    if (response.status === 1) {
      const updatedUsers = users.filter((user) => user._id !== id);

      setUsers(updatedUsers);
    }
  }

  async function onUserUpdate(user) {
    const response = await api.update(`${process.env.REACT_APP_BASE_URL}update`, user);

    if (response.status === 1) {
        const updatedUsers = users.map(u => {
            if (u._id === user._id) {
                return {...u, ...user}
            }
            return u;
        })

        setUsers([...updatedUsers])
    }
  }

  return (
    <div className="flex flex-col h-screen justify-between">
      <UserList users={users} onDelete={deleteUser} onUpdate={onUserUpdate}/>
      <UserCreate onSubmit={onFormSubmit} />
    </div>
  );
}

export default App;
