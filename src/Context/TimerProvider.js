import React, { createContext, useState } from "react";

export const TimerContext = createContext();

const TimerProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState(10000);
  const [stopTime, setStopTime] = useState(10000);

  return (
    <TimerContext.Provider
      value={{
        isActive,
        setIsActive,
        isPaused,
        setIsPaused,
        time,
        setTime,
        startTime,
        setStartTime,
        stopTime,
        setStopTime,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export default TimerProvider;
