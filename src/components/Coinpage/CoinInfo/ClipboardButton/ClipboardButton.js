import React, { useState } from "react";

import CopyIcon from "CopyIcon.svg";
import CheckedIcon from "checked.svg";
import { CheckIconImg, CopyIconImg } from "./ClipboardButton.styles";

const ClipboardButton = ({ text }) => {
  const [isClicked, setIsClicked] = useState();

  const handleClick = () => {
    navigator.clipboard.writeText(text);
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 500);
  };
  return (
    <div>
      <button onClick={handleClick} text={text}>
        {isClicked ? (
          <a>
            <CheckIconImg src={CheckedIcon} />
          </a>
        ) : (
          <a>
            <CopyIconImg src={CopyIcon} />
          </a>
        )}
      </button>
    </div>
  );
};

export default ClipboardButton;
