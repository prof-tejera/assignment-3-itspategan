import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  font-weight: 100;
  background-color: #1d3557;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  font-size: 1.25em;
  color: #edf2f4;
  line-height: 100px;
  padding: 5px 15px;
  border-radius: 100px;
  border: 2px solid #edf2f4;
  outline: 0;
  text-transform: uppercase;
  text-align: center;
  margin: 10px;
  cursor: pointer;
  transition: ease background-color 100ms;
  &:hover {
    background-color: #1e4670;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  height: "125px",
  width: "125px",
};

function ResetButton(props) {
  return <Button onClick={props.handleReset}>RESET</Button>;
}

ResetButton.propTypes = {
  onClick: PropTypes.func,
  active: PropTypes.bool,
  handleReset: PropTypes.func,
};

export default ResetButton;
