import { type FormEvent, type ComponentPropsWithoutRef } from "react";

type FormProps = ComponentPropsWithoutRef<"form">;

export default function Form(props: FormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  }
  return (
    <form onSubmit={handleSubmit} {...props}>
      {props.children}
    </form>
  );
}
