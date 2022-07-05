import React from "react";

import { ClassNameAcceptable, Icon } from "../Icon";
import styles from "./index.module.scss";

type Props = {
  icon: ClassNameAcceptable;
  children: React.ReactNode;
};
export const IconButton: React.FC<Props> = ({ icon, children }) => {
  return (
    <button className={styles.button}>
      <Icon provider={icon} className={styles.icon} />
      <div className={styles.hidden_content}>{children}</div>
    </button>
  );
};
