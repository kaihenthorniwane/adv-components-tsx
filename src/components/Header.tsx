import Button from "./UI/Button";

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-4xl">ReactTimer</h1>
      <Button mode="button">Stop Timers</Button>
    </header>
  );
}
