import React, { useState } from 'react';
import styled from 'styled-components';

const StyledPasswordInput = styled.input`
    border-radius: 10px;
    border: 1px #E2E8F0 solid;
    width: 397px;
    height: 50px;
    margin-top: 0rem;
    margin-bottom: 1rem;
    font-size: 15px;
    padding: 0px 20px;

  &::placeholder {
    color:#c3c4c3;  
  }
`;

const PasswordInput = () => {
  const [password, setPassword] = useState('');

  const Asterisks = (event) => {
    const value = event.target.value;
    const asteriskValue = value.replace(/\./g,'*');
    setPassword(asteriskValue);
  };

  return (
    <div>
      <StyledPasswordInput
        type="password"
        id="password"
        name="password"
        placeholder="Your password"
        value={password}
        onChange={Asterisks}
      />
    </div>
  );
};

export default PasswordInput;
