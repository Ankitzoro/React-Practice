import UserCard from './UserCard';

function User() {
  const users = [
    { name: 'Alice', age: 25, role: 'Developer' },
    { name: 'Bob', age: 30, role: 'Designer' },
  ];

  return (
    <div>
      <h1>User Profiles</h1>
      {users.map((user, index) => (
        <UserCard key={index} name={user.name} age={user.age} role={user.role} />
      ))}
    </div>
  );
}

export default User;