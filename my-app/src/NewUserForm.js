import React from 'react';
import ReactDOM from 'react-dom';
import './NewUserForm.css';

const NewUserForm = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="container">
          <div>
            <span>User name</span>
            <input type="text" id="userName" />
          </div>
          <div>
            <span>Email</span>
            <input type="text" id="email" />
          </div>
          <div>
            <span>City</span>
            <input type="text" id="city" />
          </div>
        </div>
        <button className="save-btn" onClick={ () => {
          setData();
          hide();
        }}>Save</button>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

function setData() {
  let arr = [];
  let userNameElemValue = document.getElementById('userName').value;
  arr.push(userNameElemValue);
  let emailElemValue = document.getElementById('email').value;
  arr.push(emailElemValue);
  let cityElemValue = document.getElementById('city').value;
  arr.push(cityElemValue);
  console.log(arr);
  return arr;
}

export default NewUserForm;