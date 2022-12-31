import UserCreate from "./components/UserCreate";
import UserList from "./components/UserList";

function App() {
//   const [users, setUsers] = useState([]);

//   async function onFormSubmit(user) {
//     const response = await api.create(
//       `${process.env.REACT_APP_BASE_URL}create`,
//       user
//     );

//     if (response.status === 1) {
//       setUsers([...users, response.data]);
//     }
//   }

//   useEffect(() => {
//     getUsers();
//   }, []);

//   async function getUsers() {
//     const response = await api.list(`${process.env.REACT_APP_BASE_URL}list`);

//     setUsers(response.result);
//   }

//   async function deleteUser(id) {
//     const response = await api.remove(
//       `${process.env.REACT_APP_BASE_URL}delete`,
//       id
//     );

//     if (response.status === 1) {
//       const updatedUsers = users.filter((user) => user._id !== id);

//       setUsers(updatedUsers);
//     }
//   }

//   async function onUserUpdate(user) {
//     const response = await api.update(
//       `${process.env.REACT_APP_BASE_URL}update`,
//       user
//     );

//     if (response.status === 1) {
//       const updatedUsers = users.map((u) => {
//         if (u._id === user._id) {
//           return { ...u, ...user };
//         }
//         return u;
//       });

//       setUsers([...updatedUsers]);
//     }
//   }
//   onDelete={deleteUser} onUpdate={onUserUpdate} />
// onSubmit={onFormSubmit} />
// users={users}

  return (
    <div className="flex flex-col h-screen justify-between">
      <UserList /> 
      <UserCreate />
    </div>
  );
}

export default App;
