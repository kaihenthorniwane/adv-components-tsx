import { useTimersContext } from "@/store/timers-context";
import Timer from "./Timer";

export default function Timers() {
  const timersContextValue = useTimersContext();
  const { timers } = timersContextValue;

  return (
    <ul className="flex flex-col gap-3">
      {timers.map((timer) => {
        return (
          <Timer key={timer.name} duration={timer.duration} name={timer.name} />
        );
      })}
    </ul>
  );
}
