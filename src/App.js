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

  return (
    <div className="flex flex-col h-screen justify-between">
      <UserList users={users}/>
      <UserCreate onSubmit={onFormSubmit} />
    </div>
  );
}

export default App;
