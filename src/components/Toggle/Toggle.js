import { ThemeContext } from "index";
import React from "react";
import { ToggleWrapper } from "./Toggle.styles";

export const Toggle = () => {
  const { toggleTheme } = React.useContext(ThemeContext);
  return (
    <div>
      <button onClick={toggleTheme}>
        <ToggleWrapper>
          <img
            className="rotate-90"
            src="https://crypto-tracker-five-delta.vercel.app/static/media/scan.0ece46e0.svg"
          ></img>
        </ToggleWrapper>
      </button>
    </div>
  );
};
