import React, { useState, useEffect } from 'react';
import './UsersTable.css';

const UsersTable = props => {
  const [users, setUsers] = useState(props.users);
  // const [tempUser, setTempUser] = useState(null);

  useEffect(() => {
    console.log("asassasa");
    console.log(users);
    setUsers(users);
  }, [props.users]);

  const rows = users.map((item, i) =>
    <tr key={i}>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.city}</td>
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