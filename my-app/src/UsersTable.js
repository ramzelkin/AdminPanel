import React, { useContext } from 'react';
import './UsersTable.css';
import './NewUserForm.css';
import { ThemeContext } from './theme-context';

const UsersTable = ({ users, deleteUser, setEditId, setEditModalShow}) => {
  const theme = useContext(ThemeContext);

  const rows = users.map((item, i) => {
    const editUserHandler = async () => {
      await setEditId(i);
      await setEditModalShow(true);
    };
    return (
      <tr key={i} style={{color: theme.cellColor}}>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.city}</td>
        <td>
          <button
            className="editUser"
            onClick={editUserHandler}
            style={{background: theme.tableButtonsBg, color: theme.tableButtonsColor}}
          >
            Edit
          </button>
          <button
            className="deleteUser"
            onClick={() => deleteUser(i)}
            style={{background: theme.tableButtonsBg, color: theme.tableButtonsColor}}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="UsersTable-container">
      <table>
          <thead>
              <tr style={{ color: theme.fontColor}}>
                  <th>User name</th>
                  <th>Email</th>
                  <th>City</th>
              </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
      </table>
    </div>
  );
}

export default UsersTable;