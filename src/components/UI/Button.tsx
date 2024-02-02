import { ComponentPropsWithoutRef, ReactNode } from "react";

type AnchorHTMLProps = {
  mode: "anchor";
  children: ReactNode;
} & ComponentPropsWithoutRef<"a">;

type ButtonHTMLProps = {
  mode: "button";
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

type ButtonProps = ButtonHTMLProps | AnchorHTMLProps;

export default function Button(props: ButtonProps) {
  const { mode, children } = props;
  if (mode === "anchor") {
    return <a {...props}>{children}</a>;
  }
  return (
    <button
      className="bg-[#260a50] text-white py-3 px-6 rounded-2xl"
      {...props}
    >
      {children}
    </button>
  );
}
