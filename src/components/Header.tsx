import { useTimersContext } from "@/store/timers-context";
import Button from "./UI/Button";

export default function Header() {
  const timersContext = useTimersContext();

  return (
    <header className="flex justify-between items-center">
      <h1 className="text-4xl">ReactTimer</h1>
      <Button
        onClick={
          timersContext.isRunning
            ? timersContext.stopTimers
            : timersContext.startTimers
        }
        mode="button"
      >
        {timersContext.isRunning ? "Stop" : "Start"}
      </Button>
    </header>
  );
}
