import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap_white.css";

import CopyIcon from "CopyIcon.svg";
import CheckedIcon from "checked.svg";
import { CheckIconImg, CopyIconImg } from "./ClipboardButton.styles";

const ClipboardButton = ({ text }) => {
  const [isClicked, setIsClicked] = useState(false);

  const content = <span>{isClicked ? "Copied" : "Copy to Clipboard"}</span>;

  const handleClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 500);
  };
  return (
    <Tooltip
      animation="zoom"
      placement="top"
      overlay={content}
      //getTooltipContainer={() => ReactDOM.findDOMNode(this.myRef)}
    >
      <button onClick={handleClick}>
        {isClicked ? (
          <CheckIconImg src={CheckedIcon} />
        ) : (
          <CopyIconImg src={CopyIcon} />
        )}
      </button>
    </Tooltip>
  );
};

export default ClipboardButton;
