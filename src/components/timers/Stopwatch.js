import { React, useState, useEffect, useContext } from "react";
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
  // const [isActive, setIsActive] = useState(false);
  // const [isPaused, setIsPaused] = useState(true);
  // const [time, setTime] = useState(0);
  // const [stopTime, setStopTime] = useState(10000);

  const {
    isActive,
    setIsActive,
    isPaused,
    setIsPaused,
    time,
    setTime,
    stopTime,
    setStopTime,
  } = useContext(TimerContext);

  useEffect(() => {
    let interval = null;

    if (time < stopTime && isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused, stopTime, time]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };
  return (
    <Container>
      <DisplayTime time={time} />
      <div>
        {/* <label>End Time</label> */}
        {/* <Input /> */}
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

// import { React, useState, useEffect, useRef } from "react";
// import styled from "styled-components";
// import DisplayTime from "../generic/DisplayTime";
// import Input from "../generic/Input";
// import PlayButton from "../generic/PlayButton";
// import PauseButton from "../generic/PauseButton";

// const Container = styled.div`
//   height: 90%;
//   width: 100%;
//   border: none;
//   background: #8d99ae;
//   padding: 20px;
//   text-align: center;
// `;

// const Stopwatch = (props) => {
//   const [isActive, setIsActive] = useState(false);
//   const [isPaused, setIsPaused] = useState(true);
//   const [time, setTime] = useState(0);

//   useEffect(() => {
//     let interval = null;

//     if (isActive && isPaused === false) {
//       interval = setInterval(() => {
//         setTime((time) => time + 10);
//       }, 10);
//     } else {
//       clearInterval(interval);
//     }
//     return () => {
//       clearInterval(interval);
//     };
//   }, [isActive, isPaused]);

//   const handleStart = () => {
//     setIsActive(true);
//     setIsPaused(false);
//   };

//   const handlePauseResume = () => {
//     setIsPaused(!isPaused);
//   };

//   const handleReset = () => {
//     setIsActive(false);
//     setTime(0);
//   };
//   return (
//     <Container>
//       <DisplayTime time={time} />
//       <div>
//         <Input />
//       </div>
//       {isActive ? (
//         <PauseButton
//           active={isActive}
//           isPaused={isPaused}
//           handleStart={handleStart}
//           handlePauseResume={handlePauseResume}
//           handleReset={handleReset}
//         />
//       ) : (
//         <PlayButton
//           active={isActive}
//           isPaused={isPaused}
//           handleStart={handleStart}
//           handlePauseResume={handlePauseResume}
//           handleReset={handleReset}
//         />
//       )}
//     </Container>
//   );
// };

// export default Stopwatch;
