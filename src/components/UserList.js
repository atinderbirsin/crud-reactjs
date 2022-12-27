import User from "./User";

function UserList({ users }) {
  const renderedList = users.map((user, index) => {
    return <User user={user} key={index} />;
  });

  return (
    <div className="bg-blue-500 p-6 grid grid-cols-5 gap-6">{renderedList}</div>
  );
}

export default UserList;
