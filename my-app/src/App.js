import React, { useState, useContext } from 'react';
import './App.css';
import UsersTable from './UsersTable.js';
import AddUserButton from './AddUserButton.js';
import EditUserForm from './EditUserForm';
import useUsers from './useUsers';
import {ThemeContext, themes} from './theme-context';
import ThemeTogglerButton from './ThemeTogglerButton';
import ContainerBG from './ContainerBG';
import NewUserForm from './NewUserForm';


function App() {
  const [ showAddUserModal, setAddModalShow ] = useState(false);
  const [ showEditUserModal, setEditModalShow ] = useState(false);
  const [ editUserId, setEditId] = useState(false);
  const { users, deleteUser, addUser, editUser } = useUsers();
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
            <AddUserButton showAddUserForm={setAddModalShow} />
            <UsersTable
              users={users}
              setEditModalShow={setEditModalShow}
              setEditId={setEditId}
              deleteUser={deleteUser}
            />
          </div>
        </div>
        {showEditUserModal &&
          <EditUserForm
            hide={() => setEditModalShow(false)}
            user={users[editUserId]}
            editUser={(user) => editUser(editUserId, user)}
          />
        }
        {showAddUserModal &&
          <NewUserForm
            hide={() => setAddModalShow(false)}
            addUser={addUser}
          />
        }
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
