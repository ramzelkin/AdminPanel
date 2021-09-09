import { ThemeContext } from './theme-context';
import React, { useContext } from "react";
import './ThemeTogglerButton.css';

const changeTheme = () => {

    console.log(ThemeContext);
}

const ThemeTogglerButton = () => {
    const theme = useContext(ThemeContext);

    return (
        // <button onClick={changeTheme}>Change Theme</button>
        <button className="theme-button" style={{ background: theme.buttonBg, color: theme.buttonColor}}>Change Theme</button>
    )
}

export default ThemeTogglerButton;