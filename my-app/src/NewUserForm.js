import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import './NewUserForm.css';
import { ThemeContext } from './theme-context';

const isValidEmail = (value) => {
  value = value.toLowerCase();
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let result = regex.test(value);
  return result;
}

const isEmpty = (value) => {
  value = value.toLowerCase();
  return value !== '';
}

const NewUserForm = ({ isShowing, hide, addNewUser }) => {
  const [isValid, setIsValid] = useState(true);
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputCity, setInputCity] = useState('');
  const [isEmptyName, setIsEmptyName] = useState(true);
  const [isEmptyCity, setIsEmptyCity] = useState(true);
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

  const errorMessage = isValid
    ? <div/>
    : <div><span className="error-text">Wrong email</span></div>

  const emptyNameMessage = isEmptyName
    ? <div/>
    : <div><span className="error-text">Empty field</span></div> 
    
  const emptyCityMessage = isEmptyCity
    ? <div/>
    : <div><span className="error-text">Empty field</span></div>

  return isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
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
        <button className="save-btn" onClick={ () => {
            let user = {};
            let userIsValid = isValidEmail(inputEmail)
            setIsValid(userIsValid);

            let nameIsEmpty = isEmpty(inputName);
            setIsEmptyName(nameIsEmpty);

            let cityIsEmpty = isEmpty(inputCity);
            setIsEmptyCity(cityIsEmpty);
            
            if (userIsValid && nameIsEmpty && cityIsEmpty) {
              user["name"] = inputName;
              user["email"] = inputEmail;
              user["city"] = inputCity;
              addNewUser(user);
              hide();
              setInputName('');
              setInputEmail('');
              setInputCity('');
            }
        }} style={{ background: theme.buttonBg, color: theme.buttonColor}}>Save</button>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;
}

export default NewUserForm;