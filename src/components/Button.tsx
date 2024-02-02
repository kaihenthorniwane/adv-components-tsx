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
  return <button {...props}>{children}</button>;
}
