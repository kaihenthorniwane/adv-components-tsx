import { createContext, useContext, type ReactNode } from "react";

type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

type TimersContextValue = TimersState & {
  addTimer: (timer: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
  const timersContext = useContext(TimersContext);
  if (timersContext === null) {
    throw new Error("TimersContext is null");
  }
  return timersContext;
}

type TimersContextProviderProps = {
  children: ReactNode;
};

export default function TimersContextProvider(
  props: TimersContextProviderProps
) {
  const contextProviderInput: TimersContextValue = {
    timers: [],
    isRunning: false,
    addTimer(timerData: Timer) {
      //...
    },
    startTimers() {
      //...
    },
    stopTimers() {
      //...
    },
  };

  return (
    <TimersContext.Provider value={contextProviderInput}>
      {props.children}
    </TimersContext.Provider>
  );
}
