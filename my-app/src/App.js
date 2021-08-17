import React, { useState, useEffect } from 'react';
import './App.css';
import UsersTable from './UsersTable.js';
import AddUserButton from './AddUserButton.js';

function App() {
  const [users, setUsers] = useState([ {"name": "Carl", "email": "example@gmail.com", "city": "Rome" } ]);

  const handleChange = (user) => {
    let temp = [...users];
    temp.push(user);
    setUsers(temp);
  }

  const deleteRow = (index) => {
    let temp = [...users];
    temp.splice(index, 1);
    setUsers(temp);
  }

  useEffect(() => {
    setUsers(users);
  }, [users]);

  return (
    <div className="App">
      <div className="App-container">
        <div className="wrapper">
          <AddUserButton handleChange={handleChange} />
          <UsersTable users={users} deleteRow={deleteRow}/>
        </div>
      </div>
    </div>
  );
}

export default App;
