type InputProps = {
  label: string;
  id: string;
  placeholder: string;
};

export default function Input(props: InputProps) {
  const { id, label, placeholder } = props;

  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <input id={id} placeholder={placeholder} />
    </div>
  );
}
