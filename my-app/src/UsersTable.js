import React, { useState, useEffect } from 'react';
import './UsersTable.css';

const UsersTable = props => {
  const rows = props.users.map((item, i) =>
    <tr key={i}>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.city}</td>
      <td><button>Edit</button><button>Delete</button></td>
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