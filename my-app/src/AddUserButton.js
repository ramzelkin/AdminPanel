import React, { useContext } from "react";
import './AddUserButton.css';
import NewUserForm from './NewUserForm.js'
import useModal from './useModal';
import { ThemeContext } from './theme-context';

const AddUserButton = (props) => {
  const {isShowing, toggle} = useModal();
  const theme = useContext(ThemeContext);

  return (
    <React.Fragment>
      <button className="button" onClick={toggle} style={{ background: theme.buttonBg, color: theme.buttonColor}}>Add user</button>
      <NewUserForm 
        isShowing={isShowing}
        hide={toggle}
        addNewUser = {props.handleChange}
      />
    </React.Fragment>
  );
}

export default AddUserButton;