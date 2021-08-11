import React, { useState, useEffect } from 'react';
import './UsersTable.css';

function UsersTable(props) {
  const [users, setUsers] = useState(props);

  useEffect(() => {
    setUsers(props);
  }, [props]);

  let items = [];
  for (let i = 0; i < users["0"].length; i += 1) {
      let value = users["0"][i];
      console.log(`test ${value}`);
      items.push(<tr key={value[0]}><td>{value[0]}</td><td>{value[1]}</td><td>{value[2]}</td></tr>)
  }

  console.log("-----");
  console.log(users);
  console.log(items);

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
            {items}
          </tbody>
      </table>
    </div>
  );
}

export default UsersTable;