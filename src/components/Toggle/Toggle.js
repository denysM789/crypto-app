import React from "react";
import { useDarkMode } from "styles/useDarkMode";

export const Toggle = ({ theme, toggleTheme }) => {
    console.log(theme)
    return(
        <div>
            <button onClick={toggleTheme}>Darkmode</button>
        </div>
    )
}