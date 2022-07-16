import React from "react";

import { classNames } from "~/helper/className";

import styles from "./two-colume.module.scss";

type Props = {
  left: React.ReactNode;
  right?: React.ReactNode;
};
export const TwoColumeTemplate: React.FC<Props> = ({ left, right }) => {
  const [preservedRight, setPreservedRight] = React.useState<React.ReactNode>();

  React.useEffect(() => {
    if (right !== undefined) {
      setPreservedRight(right);
      return;
    }
  }, [right]);

  return (
    <div className={styles.two_row_template}>
      <section className={styles.content}>{left}</section>
      {
        <section
          className={classNames(
            styles.content,
            right === undefined && styles.right_empty
          )}
        >
          {right ?? preservedRight}
        </section>
      }
    </div>
  );
};
