import React, { useState } from "react";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap_white.css";

import CopyIcon from "CopyIcon.svg";
import CheckedIcon from "checked.svg";
import { CheckIconImg, CopyIconImg } from "./ClipboardButton.styles";

const ClipboardButton = ({ text }) => {
  const [isClicked, setIsClicked] = useState(false);

  const content = <span>Copy to Clipboard</span>;

  const handleClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 500);
  };
  return (
    <div>
      <div>
        <Tooltip animation="zoom" placement="top" overlay={content}>
          <a href="#">
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
          </a>
        </Tooltip>
      </div>
    </div>
  );
};

export default ClipboardButton;
