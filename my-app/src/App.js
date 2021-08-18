import React, { useState, useEffect } from 'react';
import './App.css';
import UsersTable from './UsersTable.js';
import AddUserButton from './AddUserButton.js';
import useModal from './useModal';
import EditUserForm from './EditUserForm';

function App() {
  const [users, setUsers] = useState([ {"name": "Carl", "email": "example@gmail.com", "city": "Rome" } ]);

  const {isShowing, toggle} = useModal();

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

  const editRow = (index, user) => {
    isShowing={isShowing}
    toggle={toggle}
    let temp = [...users];
    temp.splice(index, 1, user);
    setUsers(temp);
    // let temp = [...users];
    // temp.push(user);
    // setUsers(temp);
  }

  useEffect(() => {
    setUsers(users);
  }, [users]);

  return (
    <div className="App">
      <div className="App-container">
        <div className="wrapper">
          <AddUserButton handleChange={handleChange} />
          <UsersTable users={users} deleteRow={deleteRow} editRow={toggle, editRow}/>
          <EditUserForm />
        </div>
      </div>
    </div>
  );
}

export default App;
