import React from "react";
import { StyledButton } from "./AddAssetButton.styles";

const AddAssetButton = (props) => {
  return (
    <div>
      <StyledButton onClick={props.openModal} showModal={props.showModal}>
        Add Asset
      </StyledButton>
    </div>
  );
};

export default AddAssetButton;
