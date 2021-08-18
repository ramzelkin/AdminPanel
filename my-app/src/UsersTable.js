import React from 'react';
import './UsersTable.css';
import './NewUserForm.css';

const setDeletedUser = (e) => {
  let target = e.target;
  let row = target.closest("tr");
  let index = row.getAttribute("data-index");
  return index;
}

const UsersTable = (props) => {
  const rows = props.users.map((item, i) =>
    <tr key={i} data-index={i}>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.city}</td>
      <td>
        <button className="editUser" onClick={ (e) => {
          let editedUser = setDeletedUser(e);
          props.editRow(editedUser);
        }}>Edit</button>

        <button className="deleteUser" onClick={ (e) => {
            let deletedUserRow = setDeletedUser(e);
            props.deleteRow(deletedUserRow);
          }}>Delete</button>
      </td>
    </tr>
  );

  return (
    <div className="UsersTable-container">
      <table>
          <thead>
              <tr>
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