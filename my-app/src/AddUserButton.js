import React, { useState, useEffect } from 'react';
import './AddUserButton.css';
import NewUserForm from './NewUserForm.js'
import useModal from './useModal';

const AddUserButton = (props) => {
  const {isShowing, toggle} = useModal();

  return (
    <React.Fragment>
      <button className="button" onClick={toggle}>Add user</button>
      <NewUserForm 
        isShowing={isShowing}
        hide={toggle}
        addNewUser = {props.handleChange}
      />
    </React.Fragment>
  );
}

export default AddUserButton;