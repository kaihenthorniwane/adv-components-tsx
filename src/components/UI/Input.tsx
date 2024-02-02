import { ComponentPropsWithoutRef, forwardRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

const InputWithRef = forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, label, ...props },
  ref
) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} ref={ref} />
    </div>
  );
});

export default InputWithRef;
