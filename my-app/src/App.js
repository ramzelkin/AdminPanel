import React, { useState, useEffect } from 'react';
import './App.css';
import UsersTable from './UsersTable.js';
import AddUserButton from './AddUserButton.js';

function App() {
  const [users, setUsers] = useState([[]]);

  const handleChange = () => {
    console.log("aaaa"); 
    setUsers([["eeeee", "bbbbb", "cccc"]]);
  };

  return (
    <div className="App">
      <div className="App-container">
        <div className="wrapper">
          <AddUserButton />
          <UsersTable {...users}/>
          <button onClick={handleChange}>Button</button>
        </div>
      </div>
    </div>
  );
}

export default App;
