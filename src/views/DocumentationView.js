import React from "react";
import styled from "styled-components";

import DocumentComponent from "../components/documentation/DocumentComponent";

import Loading from "../components/generic/Loading";
import DisplayRounds from "../components/generic/DisplayRounds";
import DisplayTime from "../components/generic/DisplayTime";
import Input from "../components/generic/Input";
import PlayButton from "../components/generic/PlayButton";
import PauseButton from "../components/generic/PauseButton";
import ResetButton from "../components/generic/ResetButton";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Title = styled.div`
  font-size: 2rem;
`;

class Documentation extends React.Component {
  render() {
    return (
      <Container>
        <h2>DOCUMENTATION GOES HERE</h2>
        <div>
          <Title>Documentation</Title>
          <DocumentComponent
            title="Loading spinner "
            component={<Loading />}
            propDocs={[
              {
                prop: "size",
                description: "Changes the size of the loading spinner",
                type: "string",
                defaultValue: "medium",
              },
            ]}
          />
          <DocumentComponent
            title="Play button "
            component={<PlayButton />}
            propDocs={[
              {
                prop: "onClick",
                description: "runs a function on click",
                type: "func",
              },
              {
                prop: "active",
                description: "bool for conditional rendering",
                type: "bool",
              },
              {
                prop: "handleStart",
                description:
                  "runs a function to handle what happens when the timer starts",
                type: "func",
              },
              {
                prop: "handlePauseResume",
                description: "handler for pause/resume of the timer",
                type: "func",
              },
            ]}
          />
          <DocumentComponent
            title="Pause button "
            component={<PauseButton />}
            propDocs={[
              {
                prop: "onClick",
                description: "runs a function on click",
                type: "func",
              },
              {
                prop: "active",
                description: "bool for conditional rendering",
                type: "bool",
              },
              {
                prop: "handleStart",
                description:
                  "runs a function to handle what happens when the timer starts",
                type: "func",
              },
              {
                prop: "handlePauseResume",
                description: "handler for pause/resume of the timer",
                type: "func",
              },
            ]}
          />
          <DocumentComponent
            title="Reset button "
            component={<ResetButton />}
            propDocs={[
              {
                prop: "onClick",
                description: "runs a function on click",
                type: "func",
              },
              {
                prop: "active",
                description: "bool for conditional rendering",
                type: "bool",
              },

              {
                prop: "handleReset",
                description: "handler to reset timer state",
                type: "func",
              },
            ]}
          />

          <DocumentComponent
            title="Display Rounds "
            component={<DisplayRounds />}
            propDocs={[
              {
                prop: "value",
                description: "Changes the number",
                type: "int",
                defaultValue: 0,
              },
            ]}
          />
          <DocumentComponent
            title="Display time "
            component={<DisplayTime />}
            propDocs={[
              {
                prop: "value",
                description: "Changes the number",
                type: "int",
              },
            ]}
          />
          <DocumentComponent
            title="Input "
            component={<Input />}
            propDocs={[
              {
                prop: "null",
              },
            ]}
          />
        </div>
      </Container>
    );
  }
}

export default Documentation;
