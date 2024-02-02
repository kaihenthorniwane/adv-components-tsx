import {
  type FormEvent,
  type ComponentPropsWithoutRef,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";

export type FormAPI = {
  clear: () => void;
};

type FormProps = {
  onSave: (data: unknown) => void;
} & ComponentPropsWithoutRef<"form">;

const Form = forwardRef<FormAPI, FormProps>(function Form(
  { onSave, children, ...otherProps },
  ref
) {
  const formElement = useRef<HTMLFormElement>(null);

  useImperativeHandle(ref, () => {
    const formAPI: FormAPI = {
      clear() {
        console.log("Clearing");
        formElement.current?.reset();
      },
    };
    return formAPI;
  });

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
});

export default Form;
