import { useState,  useEffect } from 'react';
import useModal from './useModal';

const useUsers = () => {
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

    const callback = () => {
        return makeEditFormCallback(editingUserIndex);
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
    
    return {
        isShowing,
        toggle,
        users,
        setUsers,
        handleChange,
        deleteRow,
        callback,
        editRow,
        editingUserIndex
      }
}

export default useUsers;