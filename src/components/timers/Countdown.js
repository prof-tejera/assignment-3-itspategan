import { React, useEffect, useContext } from "react";
import styled from "styled-components";
import DisplayTime from "../generic/DisplayTime";
// import Input from "../generic/Input";
import PlayButton from "../generic/PlayButton";
import PauseButton from "../generic/PauseButton";
import ResetButton from "../generic/ResetButton";
import { TimerContext } from "../../Context/TimerProvider";

const Container = styled.div`
  height: 40vh;
  width: 40vw;
  border: none;
  background: #8d99ae;
  padding: 20px;
  text-align: center;
  border-radius: 25px;
`;

const Stopwatch = (props) => {
  const {
    isActive,
    setIsActive,
    isPaused,
    setIsPaused,
    time,
    setTime,
    startTime,
    // setStartTime,
  } = useContext(TimerContext);

  useEffect(() => {
    let interval = null;

    if (time > 0 && isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time - 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused, time, setTime]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(startTime);
  };

  // function handleChange(event) {
  //   console.log(event.target.value);
  // }
  return (
    <Container>
      <DisplayTime time={time} />
      <div>
        {/* <label>Duration</label> */}
        {/* <Input
          onChange={(event) => {
            setStartTime(event.target.value);
          }}
        /> */}
      </div>
      {isActive ? (
        <div>
          <PauseButton
            active={isActive}
            isPaused={isPaused}
            handleStart={handleStart}
            handlePauseResume={handlePauseResume}
          />
          <ResetButton
            active={isActive}
            isPaused={isPaused}
            handleReset={handleReset}
          />
        </div>
      ) : (
        <PlayButton
          active={isActive}
          isPaused={isPaused}
          handleStart={handleStart}
          handlePauseResume={handlePauseResume}
        />
      )}
    </Container>
  );
};

export default Stopwatch;
