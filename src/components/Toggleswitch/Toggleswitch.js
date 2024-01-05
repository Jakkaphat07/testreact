import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";
import COLORS from "./Color";

const StyledLabel = styled.label`
  cursor: pointer;
  color:#2D3748;
  text-indent: -9999px;
  width: 36px;
  height: 18.5px;
  background: ${(props) => (props.checked ? COLORS.GRAY : COLORS.MainBlue)};
  display: block;
  border-radius: 100px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    right: ${(props) => (props.checked ? "17px" : "calc(19% - 4px)")};
    top: 1px;
    width: 16px;
    height: 16px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
  }
`;

export default function ToggleSwitch() {
  const [switchState, setSwitchState] = useState(true);

  function handleOnChange(e) {
    setSwitchState(!switchState);
  }

  return (
    <StyledLabel htmlFor="checkbox" checked={switchState}>
      <input
        id="checkbox"
        type="checkbox"
        checked={switchState}
        onChange={handleOnChange}
      />
    </StyledLabel>
    
  );
}
