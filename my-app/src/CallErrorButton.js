import React, { useState } from 'react';
import './CallErrorButton.css';

const CallErrorButton = () => {
    return (
        <button className="call-error-button" onClick={ () => { throw new Error('I crashed!'); } }>Call error</button>
    );
  }
  
export default CallErrorButton