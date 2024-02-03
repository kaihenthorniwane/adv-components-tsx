import Input from "./UI/Input";
import { useRef } from "react";
import Form, { FormAPI } from "./UI/Form";
import Button from "./UI/Button";
import { useTimersContext, type Timer } from "@/store/timers-context";
export default function AddTimer() {
  const form = useRef<FormAPI>(null);
  const timersContextValue = useTimersContext();
  const { addTimer } = timersContextValue;

  function handleSaveTimer(data: unknown) {
    const extractedData = data as Timer;
    addTimer({ duration: +extractedData.duration, name: extractedData.name });
    form.current?.clear();
  }
  return (
    <Form
      onSave={handleSaveTimer}
      ref={form}
      id="add-timer"
      className="flex flex-col gap-5"
    >
      <Input type="text" label="Name" id="name" placeholder="Timer Name" />
      <Input
        type="number"
        label="Duration"
        id="duration"
        placeholder="Timer Duration"
      />
      <Button mode="button">Add Timer</Button>
    </Form>
  );
}
