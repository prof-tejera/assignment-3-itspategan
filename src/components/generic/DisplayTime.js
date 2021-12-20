import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 200px;
  background-color: rgba(0, 0, 0, 0.1);
  border: 4px solid #edf2f4;
  font-size: 2.5rem;
  color: #eeee;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

function DisplayTime({ time }) {
  return (
    <Container>
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}.</span>
      <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
    </Container>
  );
}

DisplayTime.propTypes = {
  time: PropTypes.number,
};

export default DisplayTime;
