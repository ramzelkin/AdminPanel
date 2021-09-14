import React, { useContext } from "react";
import './AddUserButton.css';
import { ThemeContext } from './theme-context';

const AddUserButton = ({ showAddUserForm }) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <button
        className="button"
        onClick={() => showAddUserForm(true)}
        style={{ background: theme.buttonBg, color: theme.buttonColor}}
      >
        Add user
      </button>
    </>
  );
}

export default AddUserButton;