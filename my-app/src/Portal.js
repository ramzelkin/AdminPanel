import React from 'react';
import { createPortal } from 'react-dom';
import usePortal from './usePortal';

const target = () => {
  return <h1>Some target</h1>
}

const Portal = ({ id, children }) => {
  const target = usePortal(id);
  return createPortal(
    children,
    target
  );
};

export default Portal;