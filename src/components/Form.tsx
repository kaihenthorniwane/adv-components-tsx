import { type FormEvent, type ComponentPropsWithoutRef, useRef } from "react";

type FormProps = {
  onSave: (data: unknown) => void;
} & ComponentPropsWithoutRef<"form">;

export default function Form({ onSave, children, ...otherProps }: FormProps) {
  const formElement = useRef<HTMLFormElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
    formElement.current?.reset();
  }
  return (
    <form onSubmit={handleSubmit} {...otherProps} ref={formElement}>
      {children}
    </form>
  );
}
