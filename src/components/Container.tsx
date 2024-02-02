import {
  type ReactNode,
  type ElementType,
  type ComponentPropsWithoutRef,
} from "react";

type ContainerProps<T extends ElementType> = {
  as: ElementType;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType>(
  props: ContainerProps<C>
) {
  const Component = props.as;
  return <Component {...props}>{props.children}</Component>;
}
