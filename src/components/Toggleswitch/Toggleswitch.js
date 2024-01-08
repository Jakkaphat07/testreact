import React, { useState} from "react";
import styled from "styled-components";
import COLORS from "./Color";

const StyledLabel = styled.label`
  cursor: pointer;
  color:#2D3748;
  width: 36px;
  height: 18.5px;
  display: block;
  border-radius: 100px;
  position: relative;
  background: ${(props) => (props.checked ? COLORS.MainBlue : COLORS.GRAY)};
  
  input{
    opacity: 0;
    width: 10px;
    height: 10px;
    
    
  }
  &:after {
    content: "";
    position: absolute;
    left: ${(props) => (props.checked ? "19px" : "calc(20% - 4px)")};
    top: 2px;
    width: 14px;
    height: 14px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
  }

  
  
`;


export default function ToggleSwitch() {
  const [switchState, setSwitchState] = useState(false);

  function handleOnChange(e) {
    setSwitchState(!switchState);
  }

  return (
        
      <StyledLabel htmlFor="checkbox" checked={switchState} >
        <input
          id="checkbox"
          type="checkbox"
          checked={switchState}
          onChange={handleOnChange}
        />
      </StyledLabel>
    
  );
}