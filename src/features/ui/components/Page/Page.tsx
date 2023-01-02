import { JSX, Show } from "solid-js";
import { injectChildren } from "~/helper/children";
import styles from "./Page.module.scss";

export type PageProps = {
  children: JSX.Element;
  class?: string;
  title?: string;
};

export const Page = (props: PageProps) => {
  return (
    <main class={`${styles.page} ${props.class}`}>
      <Show when={props.title !== undefined}>
        <h1>{props.title}</h1>
      </Show>
      {injectChildren(props)}
    </main>
  );
};
