import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 75px;
  height: 25px;
  padding: 10px;
  margin: 10px;
  border: 2px solid #ef233c;
  border-radius: 5px;
  font-size: 40px;
`;

function Input(props) {
  return <StyledInput {...props} />;
}

export default Input;
