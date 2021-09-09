import React, { useContext } from 'react';
import './UsersTable.css';
import './NewUserForm.css';
import { ThemeContext } from './theme-context';

const setDeletedUser = (e) => {
  let target = e.target;
  let row = target.closest("tr");
  let index = row.getAttribute("data-index");
  return index;
}

const UsersTable = (props) => {
  const theme = useContext(ThemeContext);

  const rows = props.users.map((item, i) =>
    <tr key={i} data-index={i} style={{color: theme.cellColor}}>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.city}</td>
      <td>
        <button className="editUser" onClick={ (e) => {
          let editedUser = setDeletedUser(e);
          props.editRow(editedUser);
        }} style={{ background: theme.tableButtonsBg, color: theme.tableButtonsColor}}>Edit</button>

        <button className="deleteUser" onClick={ (e) => {
            let deletedUserRow = setDeletedUser(e);
            props.deleteRow(deletedUserRow);
          }} style={{ background: theme.tableButtonsBg, color: theme.tableButtonsColor}}>Delete</button>
      </td>
    </tr>
  );

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