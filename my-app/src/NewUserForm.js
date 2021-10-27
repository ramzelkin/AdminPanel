import React, { useState, useContext,  } from 'react';
import './NewUserForm.css';
import { ThemeContext } from './theme-context';

const isValidEmail = (value) => {
  value = value.toLowerCase();
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let result = regex.test(value);
  return result;
}

const isEmpty = (value) => {
  value = value.toLowerCase().trim();
  return value === '';
}

const NewUserForm = ({ hide, addUser }) => {
  const [isValid, setIsValid] = useState(true);
  const [isEmptyName, setIsEmptyName] = useState(false);
  const [isEmptyCity, setIsEmptyCity] = useState(false);

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputCity, setInputCity] = useState('');
  const theme = useContext(ThemeContext);

  const handleInputNameChange = (event) => {
    setInputName(event.target.value);
  }

  const handleInputEmailChange = (event) => {
    setInputEmail(event.target.value);
  }

  const handleInputCityChange = (event) => {
    setInputCity(event.target.value);
  }

  const saveHandler = () => {
    const userIsValid = isValidEmail(inputEmail)
    setIsValid(userIsValid);

    const nameIsEmpty = isEmpty(inputName);
    setIsEmptyName(nameIsEmpty);

    const cityIsEmpty = isEmpty(inputCity);
    setIsEmptyCity(cityIsEmpty);

    if (userIsValid && !nameIsEmpty && !cityIsEmpty) {
      const user = {
        name: inputName,
        email: inputEmail,
        city: inputCity,
      };
      addUser(user);
      hide();
    }
  }

  const errorMessage = !isValid && <div><span className="error-text">Wrong email</span></div>

  const emptyNameMessage = isEmptyName && <div><span className="error-text">Empty field</span></div>
    
  const emptyCityMessage = isEmptyCity && <div><span className="error-text">Empty field</span></div>

  return (
  <>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" role="dialog">
      <div className="modal" style={{background: theme.modalBg}}>
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="container">
          <div>
            <span style={{color: theme.spanColor}}>User name</span>
            <input type="text" onChange={handleInputNameChange} value={inputName} style={{background: theme.inputBg}}/>
            {emptyNameMessage}
          </div>
          <div>
            <span style={{color: theme.spanColor}}>Email</span>
            <input type="text" onChange={handleInputEmailChange} value={inputEmail} style={{background: theme.inputBg}}/>
            {errorMessage}
          </div>
          <div>
            <span style={{color: theme.spanColor}}>City</span>
            <input type="text" onChange={handleInputCityChange} value={inputCity} style={{background: theme.inputBg}}/>
            {emptyCityMessage}
          </div>
        </div>
        <button
          className="save-btn"
          onClick={saveHandler}
          style={{ background: theme.buttonBg, color: theme.buttonColor}}
        >
          Save
        </button>
      </div>
    </div>
  </>
  );
}

export default NewUserForm;