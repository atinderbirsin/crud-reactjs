import UserCreate from "./components/UserCreate";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <UserList />
      <UserCreate />
    </div>
  );
}

export default App;
