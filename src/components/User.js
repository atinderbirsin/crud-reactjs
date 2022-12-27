function User({ user }) {
  const className = `border border-2 border-white text-white border-slate-700 px-10 py-16 rounded-md inline-block flex item-center justify-center`;

  return (
    <div className={className}>
      <h2>{user.fullName}</h2>
    </div>
  );
}

export default User;
