import React from "react";
import {
  ButtonLabel,
  ButtonSpan,
  RadioButton,
  Wrapper,
} from "./DurationSelector.styles";

const DurationSelector = (props) => {
  return (
    <Wrapper>
      {props.durations.map((duration) => (
        <ButtonSpan>
          <RadioButton
            type="radio"
            isSelected={duration.isActive}
            onClick={() => props.onClick(duration)}
          />
          <ButtonLabel key={duration.id}>{duration.length}</ButtonLabel>
        </ButtonSpan>
      ))}
    </Wrapper>
  );
};

export default DurationSelector;
