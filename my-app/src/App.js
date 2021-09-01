import React, { useState, useEffect } from 'react';
import './App.css';
import UsersTable from './UsersTable.js';
import AddUserButton from './AddUserButton.js';
import EditUserForm from './EditUserForm';
import useModal from './useModal';


function App() {
  const {isShowing, toggle} = useModal();
  const [users, setUsers] = useState([ {"name": "Carl", "email": "example@gmail.com", "city": "Rome" } ]);
  const [editingUserIndex, setEditingUserIndex] = useState(null);

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
  
    const editRow = (index) => {
      setEditingUserIndex(index);
      toggle();
    }
  
    const makeEditFormCallback = (index) => {
      if (index == null || index < 0) { return (user) => { }; }
      return (user) => {
        let temp = [...users];
  
        temp[index] = user;
        setUsers(temp);
        setEditingUserIndex(null);
        toggle();
      };
    }

    useEffect(() => {
      setUsers(users);
    }, [users]);
 
  return (
    <div className="App">
      <div className="App-container">
        <div className="wrapper">
          <AddUserButton handleChange={handleChange} />
          <UsersTable users={users} deleteRow={deleteRow} editRow={editRow}/>
          <EditUserForm 
            isShowing={isShowing}
            hide={toggle}
            addEditedUser={makeEditFormCallback(editingUserIndex)}
            user={editingUserIndex == null ? {} : users[editingUserIndex]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
