import React from 'react';
import ReactDOM from 'react-dom';

const getData = () => {
    let dataUser = {};
    let userNameElemValue = document.getElementsByClassName('userName')[0].value;
    dataUser["name"] = userNameElemValue;
    let emailElemValue = document.getElementsByClassName('email')[0].value;
    dataUser["email"] = emailElemValue;
    let cityElemValue = document.getElementsByClassName('city')[0].value;
    dataUser["city"] = cityElemValue;
    return dataUser;
  }

const EditUserForm = ({ isShowing, hide, addEditedUser }) => isShowing ? ReactDOM.createPortal(
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
            <input type="text" className="userName" />
          </div>
          <div>
            <span>Email</span>
            <input type="text" className="email" />
          </div>
          <div>
            <span>City</span>
            <input type="text" className="city" />
          </div>
        </div>
        <button className="save-btn" onClick={ () => {
          let user = getData();
          addEditedUser(user);
          hide();
        }}>Save</button>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default EditUserForm;