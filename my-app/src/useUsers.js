import { useState } from 'react';

const defaultUsers = [{'name': 'Carl', 'email': 'example@gmail.com', 'city': 'Rome' }];

const useUsers = () => {
    const [users, setUsers] = useState(defaultUsers);

    const addUser = (user) => {
        setUsers([...users, user]);
    }

    const deleteUser = (index) => {
        const newUsers = [...users];
        newUsers.splice(index, 1);
        setUsers(newUsers);
    }

    const editUser = (index, user) => {
        const newUsers = [...users];
        newUsers[index] = user;
        setUsers(newUsers)
    }

    return {
        users,
        setUsers,
        addUser,
        deleteUser,
        editUser,
    }
}

export default useUsers;