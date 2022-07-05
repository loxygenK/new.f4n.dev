import React from "react";

import styles from "./index.module.scss";

export type ClassNameAcceptable = React.ComponentType<{ className: string }>;

type Props = {
  provider: ClassNameAcceptable;
  className?: string;
};
export const Icon: React.FC<Props> = ({ provider, className }) => {
  const Provider = provider;

  return <Provider className={styles.icon + " " + className} />;
};
