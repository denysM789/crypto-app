import React from "react";
import {
  ButtonLabel,
  ButtonSpan,
  RadioButton,
  Wrapper,
} from "./DurationSelector.styles";

const DurationSelector = (props) => {
  console.log("from durationpicker", props.durations);
  return (
    <Wrapper>
      {props.durations.map((duration) => (
        <ButtonSpan>
          <RadioButton type="radio" isSelected={duration.active} />
          <ButtonLabel>{duration.length}</ButtonLabel>
        </ButtonSpan>
      ))}
    </Wrapper>
  );
};

export default DurationSelector;
