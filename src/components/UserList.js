import User from "./User";

function UserList({ users, onDelete, onUpdate }) {
  const renderedList = users.map((user, index) => {
    return <User user={user} key={index} onDelete={onDelete} onUpdate={onUpdate}/>;
  });

  return (
    <div className="bg-blue-500 p-6 grid grid-cols-[repeat(auto-fill,140px)] gap-6">{renderedList}</div>
  );
}

export default UserList;
