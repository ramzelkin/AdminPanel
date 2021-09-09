import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import UsersTable from './UsersTable.js';
import AddUserButton from './AddUserButton.js';
import EditUserForm from './EditUserForm';
import useUsers from './useUsers';
import {ThemeContext, themes} from './theme-context';
import ThemeTogglerButton from './ThemeTogglerButton';
import ContainerBG from './ContainerBG';


function App() {
  const {users, handleChange, deleteRow, editRow, isShowing, toggle, callback, editingUserIndex} = useUsers();
  const theme = useContext(ThemeContext);
  const [getTheme, setTheme] = useState(themes.original);

  const toggleTheme = () => {
    
    if (getTheme === themes.solarized) {
      setTheme(themes.original);
    } else {
      setTheme(themes.solarized);
    }
  }

  return (
    <ThemeContext.Provider value={getTheme}>
      <ContainerBG />
      <div className="App" >
        <div className="App-container" >
        <ThemeTogglerButton changeTheme={toggleTheme}/>
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
    </ThemeContext.Provider>
  );
}

export default App;
