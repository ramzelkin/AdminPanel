import React, { useState, useEffect } from 'react';
import './App.css';
import UsersTable from './UsersTable.js';
import AddUserButton from './AddUserButton.js';

function App() {
  const [users, setUsers] = useState([ {"name": "Carl", "email": "example@gmail.com", "city": "Rome" } ]);

  const handleChange = (user) => {
    let temp = users;

    temp.push(user);
    setUsers(temp);
  }

  useEffect(() => {
    console.log("qqqq");
    console.log(users);
    setUsers(users);
  }, [users]);

  return (
    <div className="App">
      <div className="App-container">
        <div className="wrapper">
          <AddUserButton handleChange={handleChange}/>
          <UsersTable users={users}/>
        </div>
      </div>
    </div>
  );
}

export default App;
