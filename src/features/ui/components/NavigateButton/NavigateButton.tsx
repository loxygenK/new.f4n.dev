import { JSX } from "solid-js";
import { injectChildren } from "~/helper/children";
import styles from "./NavigateButton.module.scss";

export type NavigateButtonProps = {
  children: string;
  href: string;
};

export const NavigateButton = (props: NavigateButtonProps): JSX.Element => {
  return (
    <a href={props.href}>
      <button class={styles.navigateButton}>{injectChildren(props)}</button>
    </a>
  );
};
