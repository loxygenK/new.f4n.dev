import React from "react";

import styles from "./index.module.scss";

type Props = {
  icon: React.ReactNode;
  children: React.ReactNode;
};
export const IconButton: React.FC<Props> = ({ icon, children }) => {
  return (
    <button className={styles.button}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.hidden_content}>{children}</div>
    </button>
  );
};
