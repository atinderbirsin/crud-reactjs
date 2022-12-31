import { createContext, useCallback, useState } from "react";
import api from "../api/api.js";

const userContext = createContext();

function Provider({ children }) {
  const [users, setUsers] = useState([]);

  const createUser = async (user) => {
    const response = await api.create(
      `${process.env.REACT_APP_BASE_URL}create`,
      user
    );

    if (response.status === 1) {
      setUsers([...users, response.data]);
    }
  };

  const getUsers = async () => {
    const response = await api.list(`${process.env.REACT_APP_BASE_URL}list`);

    setUsers(response.result);
  };

  const getStableUsers = useCallback(
    getUsers,
    []
  )

  const deleteUser = async (id) => {
    const response = await api.remove(
      `${process.env.REACT_APP_BASE_URL}delete`,
      id
    );

    if (response.status === 1) {
      const updatedUsers = users.filter((user) => user._id !== id);

      setUsers(updatedUsers);
    }
  };

  const updateUser = async (user) => {
    const response = await api.update(
      `${process.env.REACT_APP_BASE_URL}update`,
      user
    );

    if (response.status === 1) {
      const updatedUsers = users.map((u) => {
        if (u._id === user._id) {
          return { ...u, ...user };
        }
        return u;
      });

      setUsers([...updatedUsers]);
    }
  };

  const value = {
    users,
    createUser,
    getUsers: getStableUsers,
    deleteUser,
    updateUser,
  }

  return (
    <userContext.Provider value={value}>
        {children}
    </userContext.Provider>
  );
}

export { Provider };
export default userContext;
