import { JSX } from "solid-js";
import { injectChildren } from "../../../../helper/children";
import styles from "./Page.module.scss";

export type PageProps = {
  children: JSX.Element;
  title: string;
};

export const Page = (props: PageProps) => {
  return (
    <main class={styles.page}>
      <h1>{props.title}</h1>
      {injectChildren(props)}
    </main>
  );
};
