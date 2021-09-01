import React, { useState, useEffect } from 'react';
import './App.css';
import UsersTable from './UsersTable.js';
import AddUserButton from './AddUserButton.js';
import EditUserForm from './EditUserForm';
import useUsers from './useUsers';


function App() {
  const {users, handleChange, deleteRow, editRow, isShowing, toggle, callback, editingUserIndex} = useUsers();
  
  return (
    <div className="App">
      <div className="App-container">
        <div className="wrapper">
          <AddUserButton handleChange={handleChange} />
          <UsersTable users={users} deleteRow={deleteRow} editRow={editRow}/>
          <EditUserForm 
            isShowing={isShowing}
            hide={toggle}
            addEditedUser={callback}
            user={editingUserIndex == null ? {} : users[editingUserIndex]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
