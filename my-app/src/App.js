import React, { useState, useEffect } from 'react';
import './App.css';
import UsersTable from './UsersTable.js';
import AddUserButton from './AddUserButton.js';

function App() {
  const [users, setUsers] = useState([["111", "222", "333"]]);

  const handleChange = () => {
    setUsers([["test-test", "test-test-111", "test-test-121"]]);
  };

  return (
    <div className="App">
      <div className="App-container">
        <div className="wrapper">
          <AddUserButton />
          <UsersTable {...users}/>
          <button className="help-button" onClick={handleChange}>Button</button>
        </div>
      </div>
    </div>
  );
}

export default App;
