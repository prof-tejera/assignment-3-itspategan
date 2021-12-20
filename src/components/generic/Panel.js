import React from "react";
import styled from "styled-components";
import ControlButton from "./ControlButton";
import DisplayRounds from "./DisplayRounds";
import DisplayTime from "./DisplayTime";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 85vh;
  width: 500px;
  background-color: cadetblue;
  color: #eee6;
`;

function Panel() {
  return (
    <StyledContainer>
      <DisplayTime />
      <DisplayRounds />
      <div>
        <ControlButton />
      </div>
    </StyledContainer>
  );
}

export default Panel;
