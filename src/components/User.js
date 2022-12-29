function User({ user, onDelete }) {
  const className = `border border-2 border-white text-white h-44 rounded-md flex flex-col items-center`;

  return (
    <div className={className}>
      <div className="h-full self-end">
        <div className="flex items-center justify-center gap-2 p-2 cursor-pointer">
          <i className="fa fa-pencil"></i>
          <i className="fa fa-minus-circle" onClick={() => onDelete(user._id)}></i>
        </div>
      </div>

      <div className="h-full">
        <h2>{user.fullName}</h2>
      </div>
    </div>
  );
}

export default User;
