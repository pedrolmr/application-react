import './App.css';

function App() {

  const users = [
    { name: "Randy Cox", id: 1 },
    { name: "Cody Thaller", id: 2 },
    { name: "Michelle Hoelzer", id: 3 }
  ];

  const userList = users.map(user => <li key={user.id}>{user.name}</li>)
  return (
    <div>
      <h1>User names</h1>
      <ul>{userList}</ul>
    </div>
  );
}

export default App;
