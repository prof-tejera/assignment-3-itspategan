import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";

const Text = styled.h1`
  color: #edf2f4;
  font-family: "Lato", sans-serif;
  font-weight: 800;
  font-size: 3rem;
  align-items: center;
  margin: 1px;
`;

function DisplayRounds(props) {
  return <Text>{props.text}</Text>;
}

DisplayRounds.propTypes = {
  text: PropTypes.string,
};

export default DisplayRounds;
