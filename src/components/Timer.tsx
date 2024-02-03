import Container from "@/components/UI/Container";
import {
  useTimersContext,
  type Timer as TimerProps,
} from "@/store/timers-context";
import { useEffect, useRef, useState } from "react";

export default function Timer(props: TimerProps) {
  const { name, duration } = props;
  const interval = useRef<number | null>(null);
  const [curTime, setCurTime] = useState(duration * 1000);
  const { isRunning } = useTimersContext();

  if (curTime <= 0 && interval.current) {
    clearInterval(interval.current);
  }

  useEffect(() => {
    let timer: number;
    if (isRunning) {
      timer = window.setInterval(function () {
        setCurTime((prevTime) => (prevTime <= 0 ? prevTime : prevTime - 50));
      }, 50);
      interval.current = timer;
    } else if (interval.current) {
      clearInterval(interval.current);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  const formattedCurTime = (curTime / 1000).toFixed(2);

  return (
    <Container as={"article"}>
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl">{name}</h2>
        <progress
          className="w-full"
          max={duration * 1000}
          value={curTime}
        ></progress>
        {formattedCurTime}
      </div>
    </Container>
  );
}
