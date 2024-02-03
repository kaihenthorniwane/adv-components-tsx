import { createContext, useContext, useReducer, type ReactNode } from "react";

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
const initialState: TimersState = {
  isRunning: false,
  timers: [],
};

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

type AddTimerAction = {
  mode: "ADD_TIMER";
  payload?: Timer;
};

type StartTimersAction = {
  mode: "START_TIMERS";
};
type StopTimersAction = {
  mode: "STOP_TIMERS";
};

type Action = AddTimerAction | StartTimersAction | StopTimersAction;

function timersReducer(state: TimersState, action: Action): TimersState {
  if (action.mode === "START_TIMERS") {
    return {
      ...state,
      isRunning: true,
    };
  }
  if (action.mode === "STOP_TIMERS") {
    return {
      ...state,
      isRunning: false,
    };
  }
  if (action.mode === "ADD_TIMER" && action.payload) {
    return {
      ...state,
      timers: [
        ...state.timers,
        {
          duration: action.payload.duration,
          name: action.payload.name,
        },
      ],
    };
  }

  return state;
}

export default function TimersContextProvider(
  props: TimersContextProviderProps
) {
  const [timersState, dispatch] = useReducer(timersReducer, initialState);

  const contextProviderInput: TimersContextValue = {
    timers: initialState.timers,
    isRunning: initialState.isRunning,
    addTimer(timerData: Timer) {
      dispatch({ mode: "ADD_TIMER", payload: timerData });
    },
    startTimers() {
      dispatch({ mode: "START_TIMERS" });
    },
    stopTimers() {
      dispatch({ mode: "STOP_TIMERS" });
    },
  };

  return (
    <TimersContext.Provider value={contextProviderInput}>
      {props.children}
    </TimersContext.Provider>
  );
}
