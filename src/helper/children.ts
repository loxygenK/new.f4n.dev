import { children, JSX } from "solid-js";

export function injectChildren(props: { children: JSX.Element }): JSX.Element {
  return children(() => props.children)();
}
