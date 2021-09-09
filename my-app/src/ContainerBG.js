import { ThemeContext, themes } from './theme-context';
import React, { useContext } from "react";
import './ContainerBG.css';

const ContainerBG = () => {
  const theme = useContext(ThemeContext);
    return (
        <div className="container-bg" style={{background: theme.background}}/>
      );
}

    
export default ContainerBG